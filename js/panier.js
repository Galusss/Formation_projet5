/*=======================================================
Global variable
=======================================================*/
let btnClear = document.getElementById("clear-order_summary");
let form = document.querySelector("form");
let productSelect = JSON.parse(sessionStorage.getItem("productSelected")); // Get product storage

/*=======================================================
POST call to API with Ajax and Fetch
=======================================================*/
function postRequest() {
    let products = []; // products: [string]
    let contact = { // contact {string}
        "lastName": form.name.value,
        "firstName": form.firstName.value,
        "email": form.mail.value,
        "address": form.adress.value,
        "city": form.city.value
    }
    for (let i = 0; i < productSelect.length; i++) { // Create a loop to increment the array of products
        let = product_id = productSelect[i].id;
        const newProduct = products.push(product_id);
    }
    const insertPost = async function (data) { // Create an async function
        let response = await fetch("http://localhost:3000/api/cameras/order", { // Wait for the response from the server and add the request parameters
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.ok) { // IF the answer is "ok"
            let responseData = await response.json() // Wait for conversion of json response to object
        } else { // ELSE (the server response is not "ok")
            console.error("Retour du serveur : " + response.status); // Displays an error message with the status code of the request
        }
    }
    insertPost({ // Send the data in the request
        "contact": contact,
        "products": products
    })
};

/*=======================================================
IF products are stored
=======================================================*/
if (sessionStorage.length != 0) {
    for (let i = 0; i < productSelect.length; i++) { 
        /*=======================================================
        Dynamically create and display content with products recap selected
        =======================================================*/
        function showRecap() {
            let tBody = document.querySelector("tbody"); //  Get the querySelector of the array body and create the content starting from that
            let trProducts = document.createElement("tr"); // New tr
            tBody.appendChild(trProducts);
            let tdName = document.createElement("td"); // New td (product name)
            trProducts.appendChild(tdName);
            tdName.innerHTML = productSelect[i].name;
            let tdLenses = document.createElement("td"); // New td (product lenses)
            trProducts.appendChild(tdLenses);
            tdLenses.innerHTML = productSelect[i].lenses;
            let tdPrice = document.createElement("td"); // New td (product price)
            trProducts.appendChild(tdPrice);
            tdPrice.innerHTML = productSelect[i].price + " €";
        } showRecap()
    }

    /*=======================================================
    Get the total price and create an order number
    =======================================================*/
    function orderInfo () {
        let tFoot = document.querySelector("tfoot"); //  Get the querySelector of the array foot and create the total price starting from that
        let trTotal = document.createElement("tr"); // New tr
        tFoot.appendChild(trTotal);
        let tdTotal = document.createElement("td"); // New td (total price)
        trTotal.appendChild(tdTotal);
        tdTotal.setAttribute("colspan", "3");
        tdTotal.setAttribute("class", "total");

        /*=======================================================
        Calculation of the total price according to the number of products & Generate an order number
        =======================================================*/
        if (productSelect.length === 1) {
            totalPrice = productSelect[0].price;
        } else if (productSelect.length === 2) {
            totalPrice = productSelect[0].price + productSelect[1].price;
        } else if (productSelect.length === 3) {
            totalPrice = productSelect[0].price + productSelect[1].price + productSelect[2].price;
        } else if (productSelect.length === 4) {
            totalPrice = productSelect[0].price + productSelect[1].price + productSelect[2].price + productSelect[3].price;      
        } else if (productSelect.length === 5) {
            totalPrice = productSelect[0].price + productSelect[1].price + productSelect[2].price + productSelect[3].price + productSelect[4].price;        
        }
        tdTotal.innerHTML = "Prix total : " + totalPrice + " €"; // Displays the total price in the recap
        let orderData = {
            totalPrice: totalPrice
        }
        sessionStorage.setItem("orderInfo", JSON.stringify(orderData)); // Stores the order ID and total price in the sessionStorage    
    }   
    orderInfo()

    /*=======================================================
    Empty the order summary and delete the stored products
    =======================================================*/
    btnClear.addEventListener("click", clearStorage); 
    function clearStorage() {
        sessionStorage.clear()
        history.go(0) // Refresh the page for display
    }

    /*=======================================================
    When the form is submitted the order information is sent to the server
    =======================================================*/
    form.addEventListener("submit", submitOrder);
    function submitOrder() {
        for (let i = 0; i < productSelect.length; i++) {  
            let x = productSelect.length - 1; // Create a variable that will be equal to the number of products to order
            if (x == i) { // IF the variable is equal to the number of products
                console.log("KO 1/4 ?")
                event.preventDefault() // Stop action to confirmation.html
                console.log("KO 2/4 ?")
                postRequest() // Send request
                console.log("KO 3/4 ?")
                window.open("confirmation.html", "_parent"); // Go to confirmation.html
                console.log("KO 4/4 ?")
            }                  
        }     
    }
}else { // ELSE (If products are not stored)
    btnClear.addEventListener("click", noProduct); // When you press the empty basket button
    function noProduct() {
        alert("Vous n'avez aucun produit."); 
        window.open("index.html", "_parent"); 
    }
    form.addEventListener("submit", noSubmit); // When you want to submit the form with an empty basket
    function noSubmit() {
        event.preventDefault() // Form is not submitted
        alert("Vous ne pouvez pas confirmer votre commande avec un panier vide."); 
        window.open("index.html", "_parent"); 
    }
}
