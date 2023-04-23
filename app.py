import pandas as pd
import numpy as np
from flask import Flask, render_template , request, jsonify
import plotly.graph_objs as go
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf
from datetime import date
import mpld3
import matplotlib.pyplot as plt
import plotly.graph_objs as go
from mpld3 import plugins
import csv
import json
# Create the Flask app
app = Flask(__name__)

def remove(x):
    """
    This function will strip the data column of the dataframe.
    """
    x = str(x)
    res = x.split(" ")[0]
    return res


# Create sequences
def create_sequences(data, sequence_length):
    X, Y = [], []
    for i in range(len(data) - sequence_length - 1):
        X.append(data[i:(i+sequence_length), 0])
        Y.append(data[(i+sequence_length), 0])
    return np.array(X), np.array(Y)


# Load the saved model
model = load_model('bitcoin.h5')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/blogs')
def blog():
    return render_template('blog.html')

@app.route('/abouts')
def about():
    return render_template('about.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/price')
def price():
    return render_template('price.html')

@app.route('/predict', methods=['POST'])
def predict():
    dataset = request.form.get('options')

    # Load the Bitcoin data
    data = yf.Ticker(dataset)  
    data = data.history(period="max")  # we want the max data avialable 
    data.index = pd.to_datetime(data.index)  # changing the index
    data.index = data.index.to_series().apply(lambda x:remove(x))

    
    data=data.drop('Dividends',axis=1)
    data=data.drop('Stock Splits',axis=1)
    data=data.reset_index()
    # Preprocess data
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(pd.to_numeric(data['Close'], errors='coerce').values.reshape(-1, 1))

    # Split data into training and testing sets
    training_size = int(len(scaled_data) * 0.8)
    testing_size = len(scaled_data) - training_size
    training_data = scaled_data[0:training_size, :]
    testing_data = scaled_data[training_size:len(scaled_data), :]

    sequence_length = 60
    X_train, Y_train = create_sequences(training_data, sequence_length)
    X_test, Y_test = create_sequences(testing_data, sequence_length)

    # Reshape input data
    X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
    X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

    # Generate predictions for the testing data
    Y_pred = model.predict(X_test)

    # Invert the scaling for the predictions and actual values
    Y_pred = scaler.inverse_transform(Y_pred)
    Y_test = scaler.inverse_transform(Y_test.reshape(-1, 1))

    

    # Create a Plotly figure
    fig = go.Figure()

    # Add the actual prices trace
    fig.add_trace(
        #go.Scatter(x=Y_test.index, y=Y_test.values, name='Actual Price')
        go.Scatter(x=data['Date'], y=data['Close'], name='Actual Price')
    )

    # Add the predicted prices trace
    fig.add_trace(
        #go.Scatter(x=Y_test.index, y=Y_pred.flatten(), name='Predicted Price')
        go.Scatter(x=data['Date'].iloc[-len(Y_pred):], y=Y_pred.flatten(), name='Predicted Price')
    )

    # Set the chart layout
    fig.update_layout(
        title=dataset,
        xaxis=dict(
            title='Date',
            rangeselector=dict(
                buttons=list([
                    dict(count=7, label='1w', step='day', stepmode='backward'),
                    dict(count=1, label='1m', step='month', stepmode='backward'),
                    dict(count=3, label='3m', step='month', stepmode='backward'),
                    dict(count=6, label='6m', step='month', stepmode='backward'),
                    dict(step='all')
                ])
            ),
            rangeslider=dict(visible=True),
            type='date',
        ),
        yaxis=dict(title='Price'),
        plot_bgcolor='rgba(0, 0, 0, 0)', # Set the background color to transparent
        template='plotly_dark',
    )

    # Configure interactive features
    fig.update_layout(
        hovermode='x',
    )
    fig.update_traces(
        hovertemplate='%{x}<br>%{y:$.2f}'
    )

    # Render the chart using the Plotly JavaScript library
    plot_div = fig.to_html(full_html=False)

    # Generate predictions for the next 30 days and Get the last sequence of closing prices
    last_date = data['Date'].max()
    next_dates = pd.date_range(last_date, periods=30, freq='D')

    last_sequence = data['Close'].values[-30:]
    # Scale the data
    last_sequence_scaled = scaler.transform(last_sequence.reshape(-1, 1))

    # Reshape the data into sequences
    last_sequence_reshaped = last_sequence_scaled.reshape(1, 30, 1)

    # prediction for the next day
    next_pred = model.predict(last_sequence_reshaped)[0][0]

    # Convert the predictions back to their original scale
    predictions = scaler.inverse_transform(np.array(next_pred).reshape(-1, 1))

    next_day=f"Predicted price for {dataset} on {next_dates[1].date().strftime('%d-%m-%Y')} will be ${predictions[0][0]:.2f}"

    print(next_day)

    # Render the HTML template
    return render_template('index.html', plot_div=plot_div , next_day=next_day)


@app.route('/nft')
def nft():
    return render_template('nft.html')

# if __name__ == '__main__':
#     app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)

