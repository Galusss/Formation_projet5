/*=======================================================
Global variable
=======================================================*/
function confirmation() {
    let orderPrice = document.getElementById("orderPrice");
    let btnReturnHome = document.getElementById("btn-return-home");
    let orderInfos = JSON.parse(sessionStorage.getItem("orderInfo")); // Get the total price
    orderPrice.innerHTML = orderInfos.totalPrice + " €"; // Displays the total price in the order confirmation
    btnReturnHome.addEventListener("click", function (clearAndGo) { // Go back to home and delete the sessionStorage
        sessionStorage.removeItem("orderInfo"); // Delete total price stored
        window.open("index.html", "_parent"); // Go to home
    }); 
};
confirmation()