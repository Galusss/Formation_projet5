/*=======================================================
Global variable (for dynamically create and display content with product information)
=======================================================*/
let productCardParent = document.getElementById("custom-and-select"); // Get the div of the section and create the content starting from this div
let productSelect;
let imgParent;
let imgProduct;
let productName; 
let productLenses;
let productDescription;
let productPrice;


/*======================================================= 
GET call to API with Ajax and Fetch
=======================================================*/
const getProducts = async function () { // Create an async function
    let response = await fetch('http://localhost:3000/api/cameras/'); // Wait for the response from the server that contains the product data
    if (response.ok) { // IF the answer is "ok"
        let data = await response.json() // Wait for conversion of json response to object
        for (let i = 0; i < data.length; i++) {
            function showProducts() { // Create a function that stores and displays my products
                const product = new products(data[i]._id, data[i].imageUrl, data[i].name, data[i].lenses, data[i].price, data[i].description); // This class is in products.js
                let searchId = "?" + product.id;
                if (window.location.search.indexOf(searchId) > -1) { // IF the location.search is identical to the product id
                    createContent();
                    contentValue(product); 
                    // Get the form and display the values
                    let form = document.querySelector("form");
                    productSelect.appendChild(form);
                    document.querySelector("option").setAttribute("class", "hide"); // Hides the option create for the W3C test
                    const select = document.querySelector("select");
                    for (let i = 0; i < product.lense.length; i++) { 
                        let newOption = document.createElement("option"); // New option
                        newOption.setAttribute("class", "lense");
                        newOption.setAttribute("value", product.lense[i]);
                        newOption.setAttribute("selected", "false");
                        newOption.innerHTML = product.lense[i];
                        select.appendChild(newOption);
                        /*=======================================================
                        When the form is submitted
                        =======================================================*/
                        form.addEventListener("submit", function (event) { // Create event function
                            if (newOption.selected === true && newOption.value !== '') { // IF option is select              
                                let dataProducts = JSON.parse(sessionStorage.getItem("product") || "[]"); // Define storage in javascript object
                                let data = {
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    lenses: newOption.value
                                };
                                dataProducts.push(data); // Add an element to the object data
                                sessionStorage.setItem("product", JSON.stringify(dataProducts)); // Store product in sessionStorage   
                            }
                        });
                    }
                }
            } 
            showProducts()
        } 
    } else { // ELSE (the server response is not "ok")
        console.error("Retour du serveur :", response.status); // Displays an error message with the status code of the request
    }
}
getProducts()


function createContent() { // Create dynamic content
    productSelect = document.createElement("div"); // New div
    productCardParent.appendChild(productSelect);
    productSelect.setAttribute("class", "product-select");
    imgParent = document.createElement("div"); // New div
    productSelect.appendChild(imgParent);
    imgParent.setAttribute("class", "imgParent");
    imgProduct = document.createElement("img"); // New img (product image)
    imgParent.appendChild(imgProduct);
    imgProduct.classList.add("img-customize");
    imgProduct.setAttribute("alt", "Personnalier votre caméra pour valider votre commande chez Oricono.");
    productName = document.createElement("p"); // New p (product name)
    productSelect.appendChild(productName);
    productName.setAttribute("class", "name");
    productLenses = document.createElement("p"); // New p (product lenses)
    productSelect.appendChild(productLenses);
    productLenses.setAttribute("class", "lenses");
    productDescription = document.createElement("p"); // New p (product description)
    productSelect.appendChild(productDescription);
    productDescription.setAttribute("class", "description");
    productPrice = document.createElement("p"); // New p (product price)
    productSelect.appendChild(productPrice);
    productPrice.setAttribute("class", "price");
}

function contentValue(product) {
    // Content value
    imgProduct.setAttribute("src", product.imageUrl);
    productName.innerHTML = product.name;
    productLenses.innerHTML = product.lense.join(" ou ");
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price + " €";
};
