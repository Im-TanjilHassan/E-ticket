let seatBooked = [];

// select seat
function seatSelected(seatId) {

    if (seatBooked.length <= 3) {
      // calling seatDetails Function
      seatDetails(seatId);
      // calling seatPriceCalculate function
        seatPriceCalculate(seatId);
        
        if (seatBooked.length == 4) {
            const applyCouponBtn = document.getElementById("coupon-btn");
            applyCouponBtn.removeAttribute('disabled')

            const couponInput = document.getElementById("coupon-input");
            couponInput.removeAttribute("disabled");
        }
    }
    else {
        alert("You only can booked 4 seat at a time")
    }
    

}
// showing seat detail and price
function seatDetails(seatId) {
  //set bg color after selecting a seat
  const seatIdentify = document.getElementById(seatId);
  seatIdentify.style = "background-color: #1DD100";

  //showing it in the seat perches box
  const seatInfo = document.getElementById("seat-info");

  if (!seatBooked.includes(seatId)) {
    const div = document.createElement("div");
    div.setAttribute("id", `seatBooked-${seatIdentify.innerText}`);
    div.classList.add("flex", "justify-between");
    div.innerHTML = `
            <p id="seat-${seatIdentify.innerText}">${seatIdentify.innerText}</p>
            <p>Economoy</p>
            <p>$<span id="seat-price">550</span></p>
        `;

    seatInfo.appendChild(div);
  }
}

//calculating seat price
function seatPriceCalculate(seatId) {
  let getDefaultTotalPrice = document.getElementById("seat-total-price");
  let totalPrice = parseInt(getDefaultTotalPrice.innerText);

  if (!seatBooked.includes(seatId)) {
    //get seat perches price and addition to total price
    const perSeatPrice = document.getElementById("seat-price");
    const perSeatPriceInt = parseInt(perSeatPrice.innerText);
    totalPrice = totalPrice + perSeatPriceInt;

    getDefaultTotalPrice.innerText = totalPrice;

    //grand total price calculation
    const getDefaultGrandTotalPrice = document.getElementById("grand-total");
    getDefaultGrandTotalPrice.innerText = totalPrice;

    seatCalculation();
    seatBooked.push(seatId);
  }
}

function seatCalculation() {
  // show how many seat perches
  const seatPerchesCount = document.getElementById("seat-perches-count");
  seatPerchesCount.innerText = parseInt(seatPerchesCount.innerText) + 1;

  //show how many seat left
  const seatLeft = document.getElementById("seat-left");
  seatLeft.innerText = parseInt(seatLeft.innerText) - 1;
}

// make next btn enable
document
  .getElementById("phone-number")
  .addEventListener("change", function (event) {
      const seatCount = document.getElementById("seat-perches-count").innerText;
      
    if (seatCount >= 1 && typeof parseInt(event.target.value) === "number") {
      document.getElementById("next-btn").removeAttribute("disabled");

      // if input field value become empty again button will be disabled again
      if (!event.target.value) {
        document.getElementById("next-btn").setAttribute("disabled", "");
      }
    }
  });


//------------ coupon code ---------------
function usingCouponCode() {
    //get coupon wrapper div box
    const couponWrapper = document.getElementById("coupon-wrapper")

    // show discounted price
    const discountWrapper = document.getElementById("discount-wraper");
    const showDiscountedPrice = document.getElementById("discount-price");

    // get grand total price and calculate
    const grandTotalPrice = document.getElementById("grand-total");
    const grandTotalPriceInt = parseInt(grandTotalPrice.innerText);

    // input value
    const couponInputValue = document.getElementById('coupon-input').value
   
    if (couponInputValue === "NEW15") {
      //15% discount
      const getDiscount = grandTotalPriceInt * (15 / 100);
      const discountedPrice = grandTotalPriceInt - getDiscount;
      grandTotalPrice.innerText = discountedPrice;

      // hide coupon wrapper
        couponWrapper.classList.add("hidden");
        
        // show discounted price
        discountWrapper.classList.remove("hidden");

        //show discount price
        showDiscountedPrice.innerText = getDiscount;
        
    }
    else if (couponInputValue == "Couple 20") {
      //20% discount
      const getDiscount = grandTotalPriceInt * (20 / 100);
      const discountedPrice = grandTotalPriceInt - getDiscount;
      grandTotalPrice.innerText = discountedPrice;

      // hide coupon wrapper
      couponWrapper.classList.add("hidden");

      // show discounted price
      discountWrapper.classList.remove("hidden");

      //show discount price
      showDiscountedPrice.innerText = getDiscount;
    }
    else {
        alert('Invalid coupon code')
    }

}

// refresh page

function reload() {
  location.replace(location.href);
}
