// select seat
function seatSelected(seatId) {
    // calling seatDetails Function
    seatDetails(seatId);

    // calling seatPriceCalculate function
    seatPriceCalculate();
}

// showing seat detail and price
function seatDetails(seatId) {
    //set bg color after selecting a seat
    const seatIdentify = document.getElementById(seatId);
    seatIdentify.style = 'background-color: #1DD100';

    //showing it in the seat perches box
    const seatInfo = document.getElementById("seat-info");
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");
    div.innerHTML = `
            <p id="seat-name">${seatIdentify.innerText}</p>
            <p>Economoy</p>
            <p>$<span id="seat-price">550</span></p>
    `;

    seatInfo.appendChild(div);

    // show how many seat perches
    const seatPerchesCount = document.getElementById("seat-perches-count");
    seatPerchesCount.innerText = parseInt(seatPerchesCount.innerText) + 1;
    
    //show how many seat left
    const seatLeft = document.getElementById('seat-left');
    seatLeft.innerText = parseInt(seatLeft.innerText) - 1;
};

//calculating seat price
function seatPriceCalculate() {
    
    let getDefaultTotalPrice = document.getElementById("seat-total-price");
    let totalPrice = parseInt(getDefaultTotalPrice.innerText);

    //get seat perches price and addition to total price
    const perSeatPrice = document.getElementById('seat-price');
    const perSeatPriceInt = parseInt(perSeatPrice.innerText);
    totalPrice = totalPrice + perSeatPriceInt;
    
    getDefaultTotalPrice.innerText = totalPrice;

    //grand total price calculation
    const getDefaultGrandTotalPrice = document.getElementById('grand-total')
    getDefaultGrandTotalPrice.innerText = totalPrice;
    //const grandTotal = parseInt(getDefaultGrandTotalPrice.innerText)
       
}

// make next btn enable
document.getElementById("phone-number").addEventListener("change", function (event) {
    const seatCount = document.getElementById("seat-perches-count").innerText;

    console.log(event.target.value);
    if (seatCount >= 1 && typeof parseInt(event.target.value) === "number") {
        document.getElementById("next-btn").removeAttribute("disabled");

        // if input field value become empty again button will be disabled again
        if (!event.target.value) {
            document.getElementById("next-btn").setAttribute("disabled", "")
        }
    }
  });

 