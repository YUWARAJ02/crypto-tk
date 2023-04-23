  

const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100";
setInterval(()=> {
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const cryptoTable = document.getElementById("crypto-table");
     // Remove all existing rows from the table
     while (cryptoTable.rows.length > 1) {
        cryptoTable.deleteRow(-1);
      }

    data.forEach((crypto) => {
      const row = cryptoTable.insertRow(-1);
      const nameCell = row.insertCell(0);
      const priceCellUSD = row.insertCell(1);
      const priceCellINR = row.insertCell(2);
      const aboutCell = row.insertCell(3);

      // create an img element for the icon
      const icon = document.createElement("img");
      icon.src = crypto.image;

      // create a span element for the name
      const name = document.createElement("span");
      name.innerHTML = crypto.name;

      // create a div element to hold the icon and name
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("name-div");
      nameDiv.appendChild(icon);
      nameDiv.appendChild(name);

      // add the name div to the name cell
      nameCell.appendChild(nameDiv);
      
      priceCellUSD.innerHTML = `$${crypto.current_price}`;
      priceCellINR.innerHTML = `₹${(crypto.current_price * 72.56).toFixed(2)}`;

      // create a button for the "About" column
      const button = document.createElement("button");
      button.innerHTML = "About";
      button.classList.add("about-button");

      // add an event listener to the button that displays a modal with information about the coin when clicked
      button.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <span class="crypto-icon"><img src="${crypto.image}" width="32" height="32"></img></span>
            <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
            <p>Total Volume: ${crypto.total_volume}</p>
            <p>Market Cap Rank: ${crypto.market_cap_rank}</p>
            <p>High price in 24h : <b>$</b> ${crypto.high_24h}</p>
            <p>Low price in 24h : <b>$</b> ${crypto.low_24h}</p>
            <p>Price Change in 24h: <b>$</b> ${crypto.price_change_24h}</p>
            <p>Total Supply: ${crypto.total_supply}</p>
            
          </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
          document.body.removeChild(modal);
        });
      });

      aboutCell.appendChild(button);
    });
  })
  .catch((error) => {
    console.error(error);
  });
},10000);
   