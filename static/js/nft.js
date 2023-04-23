
fetch('../static/nft.json')
.then(response => response.json())
.then(data => {
    let dataArray = JSON.parse(data);
    const cryptoTable = document.getElementById("crypto-table");
    
    dataArray.forEach(ele => {
        const row = cryptoTable.insertRow(-1);
        const iconCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const market = row.insertCell(2);
        const volume = row.insertCell(3);
        const aboutCell = row.insertCell(4);
        
        const img = document.createElement("div");
        img.className = 'image-container';
        const icon = document.createElement("img");
        icon.src = ele.Logo;
        icon.className = 'hover-img';
        icon.alt = 'Image';
        icon.style.width = '55px';

        const l_icon = document.createElement("img");
        l_icon.src = icon.src;
        l_icon.className = 'detailed-img';
        l_icon.alt = 'Larger Image';        
        
        img.appendChild(icon);
        img.appendChild(l_icon);

        iconCell.appendChild(img);

        nameCell.innerHTML = ele.Name;

        market.innerHTML = ele.Market_Cap;

        volume.innerHTML = ele.Volume;

        // create a button for the "More Details" column
        const button = document.createElement("button");
        button.innerHTML = "More Details";
        button.classList.add("about-button");

        // add an event listener to the button that displays a modal with information about the coin when clicked
        button.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <span class="nft-icon"><img src="${ele.Logo}" width="55px" height="55px"></img></span>
            <h2>${ele.Name}</h2>
            <p>Owners : ${ele.more.Owners}</p>
            <p>Assets : ${ele.more.Assets}</p>
            <p>Floor_Price : ${ele.more.Floor_Price} eth</p>
            <p>Average_Price : ${ele.more.Average_Price} eth</p>
            <p>Website : <a href=" ${ele.more.Website}" target="_blank"> ${ele.Name}</a></p>
            
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




});

