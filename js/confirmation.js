/*=======================================================
Global variable
=======================================================*/
let orderPrice = document.getElementById("orderPrice");
let orderId = document.getElementById("orderId");
let btnReturnHome = document.getElementById("btn-return-home");

if (sessionStorage.length != 0) { // IF products are stored
    let orderInfos = JSON.parse(sessionStorage.getItem("orderInfo")); // Get the price and the order id

    /*=======================================================
    Displays the price and order id in the order confirmation
    =======================================================*/
    orderPrice.innerHTML = orderInfos.totalPrice + " €";

    /*=======================================================
    Go back to home and delete the sessionStorage
    =======================================================*/
    btnReturnHome.addEventListener("click", clearAndGo); 
    function clearAndGo() {
        sessionStorage.clear() // Delete all stored products
        window.open("index.html", "_parent"); // Go to home
    }
}
