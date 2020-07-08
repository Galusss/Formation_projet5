// Global variable
let btnClear = document.getElementById("clear-order_summary");
let form = document.querySelector("form");
let productSelect = JSON.parse(sessionStorage.getItem("product")); // Get product storage

// Global variable (for dynamically create and display content with products recap selected)
let tBody = document.querySelector("tbody"); //  Get the querySelector of the array body and create the content starting from that
let trProducts;
let tdName;
let tdLenses;
let tdPrice;


/*=======================================================
IF Products are not stored
=======================================================*/
function confirmOrder() {
    if (productSelect == null) {
        btnClear.addEventListener("click", function (noProduct) { // When you press the empty basket button
            alert("Vous n'avez aucun produit.");
            window.open("index.html", "_parent");
        });
        form.addEventListener("submit", function (noSubmit) { // When you want to submit the form with an empty basket
            event.preventDefault() // Form is not submitted
            alert("Vous ne pouvez pas confirmer votre commande avec un panier vide.");
            window.open("index.html", "_parent");
        });
    /*=======================================================
    ELSE IF Products are stored
    =======================================================*/
    } else if (productSelect.length != 0) {
        for (let i = 0; i < productSelect.length; i++) {
            createTable() // Dynamically create and display content with products recap selected
            // Table value 
            tdName.innerHTML = productSelect[i].name;
            tdLenses.innerHTML = productSelect[i].lenses;
            tdPrice.innerHTML = productSelect[i].price + " €";
        }
        total() // Total product price
        btnClear.addEventListener("click", function (clearStorage) { // Empty the order summary and delete the stored products
            sessionStorage.clear()
            history.go(0) // Refresh the page for display
        });
        form.addEventListener("submit", function (submitOrder) { // When the form is submitted the order information is sent to the server
            event.preventDefault() // Stop action to confirmation.html
            postRequest() // Send request    
        });
    }
}
confirmOrder()


function createTable() { // Dynamically create and display content with products recap selected
    trProducts = document.createElement("tr"); // New tr
    tBody.appendChild(trProducts);
    tdName = document.createElement("td"); // New td (product name)
    trProducts.appendChild(tdName);
    tdLenses = document.createElement("td"); // New td (product lenses)
    trProducts.appendChild(tdLenses);
    tdPrice = document.createElement("td"); // New td (product price)
    trProducts.appendChild(tdPrice);
};

function total() { // Get the total price and create an order number
    let tFoot = document.querySelector("tfoot"); //  Get the querySelector of the array foot and create the total price starting from that
    let trTotal = document.createElement("tr"); // New tr
    tFoot.appendChild(trTotal);
    let tdTotal = document.createElement("td"); // New td (total price)
    trTotal.appendChild(tdTotal);
    tdTotal.setAttribute("colspan", "3");
    tdTotal.setAttribute("class", "total");
    // Calculation of the total price according to the number of products & Generate an order number
    let total = 0;
    for (let i = 0; i < productSelect.length; i++) {
        total += productSelect[i].price;
    }
    totalPrice = total;
    tdTotal.innerHTML = "Prix total : " + totalPrice + " €"; // Displays the total price in the recap
    let orderData = {
        totalPrice: totalPrice
    }
    sessionStorage.setItem("orderInfo", JSON.stringify(orderData)); // Stores the order ID and total price in the sessionStorage    
};

function postRequest() { // POST call to API with Ajax and Fetch
    let products = []; // products: [string]
    let contact = { // contact {string}
        "lastName": form.name.value,
        "firstName": form.firstName.value,
        "email": form.mail.value,
        "address": form.adress.value,
        "city": form.city.value
    }
    for (let i = 0; i < productSelect.length; i++) { // Create a loop to increment the array of products
        let product_id = productSelect[i].id;
        const newProduct = products.push(product_id);
    }
    const insertPost = async function (data) { // Create an async function
        let response = await fetch("http://localhost:3000/api/cameras/order", { // Wait for the response from the server and add the request parameters
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) { // IF the answer is "ok"
            let responseData = await response.json() // Wait for conversion of json response to object
            window.open("confirmation.html", "_parent"); // Opens the confirmation page
            sessionStorage.removeItem("product");
        } else { // ELSE (the server response is not "ok")
            console.error("Retour du serveur : " + response.status); // Displays an error message with the status code of the request
        }
    }
    insertPost({ // Send the data in the request
        "contact": contact,
        "products": products
    })
};
