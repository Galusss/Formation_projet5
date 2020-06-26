/*=======================================================
Global variable
=======================================================*/
let orderPrice = document.getElementById("orderPrice");
let orderId = document.getElementById("orderId");
let btnReturnHome = document.getElementById("btn-return-home");
let orderInfos = JSON.parse(sessionStorage.getItem("orderInfo")); // Get the total price

if (orderInfos.length != 0) { // IF products are stored
    orderPrice.innerHTML = orderInfos.totalPrice + " €"; // Displays the total price in the order confirmation
}

btnReturnHome.addEventListener("click", function (clearAndGo) { // Go back to home and delete the sessionStorage
    sessionStorage.removeItem("orderInfo") // Delete total price stored
    window.open("index.html", "_parent"); // Go to home
}); 
