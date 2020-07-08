// Global variable (for dynamically create and display content with product information)
let productCardParent = document.getElementById("products-dynamic"); // Get the div of the section and create the content starting from this div
let productsDiv;
let productCard;
let imgParent;
let infosCard;
let cardName;
let cardLenses;
let cardPrice;
let cardDescription;
let cardSelectBtn;


/*=======================================================
GET call to API with Ajax and Fetch
=======================================================*/
const getProducts = async function () { // Create an async function
    let response = await fetch('http://localhost:3000/api/cameras/'); // Wait for the response from the server that contains the product data
    if (response.ok) { // IF the answer is "ok"
        let data = await response.json() // Wait for conversion of json response to object
        for (let i = 0; i < data.length; i++) {
            function showContent() { // Create a function that stores and displays my products
                const product = new products(data[i]._id, data[i].imageUrl, data[i].name, data[i].lenses, data[i].price, data[i].description); // This class is in products.js
                /*=======================================================
                Dynamically create and display content with product information
                =======================================================*/
                createContent();
                contentValue(product);
            }
            showContent();
        }
    } else { // ELSE (the server response is not "ok")
        console.error("Retour du serveur :", response.status); // Displays an error message with the status code of the request
    }
}
getProducts();


function createContent() { // Create dynamic content
    productsDiv = document.createElement("div"); // New div
    productCardParent.appendChild(productsDiv);
    productsDiv.setAttribute("class", "products");
    productCard = document.createElement("div"); // New div
    productsDiv.appendChild(productCard);
    productCard.setAttribute("class", "product-card");
    imgParent = document.createElement("img"); // New img (product image)
    productCard.appendChild(imgParent);
    imgParent.setAttribute("width", "400");
    imgParent.setAttribute("height", "400");
    imgParent.setAttribute("alt", "Voici l'un de nos modèle de caméra que vous pouvez retrouver sur Oricono.");
    infosCard = document.createElement("div"); // New div
    productCard.appendChild(infosCard);
    infosCard.setAttribute("class", "infos-card");
    cardName = document.createElement("h3"); // New h3 (product name)
    infosCard.appendChild(cardName);
    cardName.setAttribute("class", "cardName");
    cardLenses = document.createElement("p"); // New p (product lenses)
    infosCard.appendChild(cardLenses);
    cardLenses.setAttribute("class", "cardLenses");
    cardPrice = document.createElement("p"); // New p (product price)
    infosCard.appendChild(cardPrice);
    cardPrice.setAttribute("class", "cardPrice");
    cardDescription = document.createElement("p"); // New p (product description)
    infosCard.appendChild(cardDescription);
    cardDescription.setAttribute("class", "cardDescription");
    cardSelectBtn = document.createElement("a"); // New a (button to select a product)
    cardSelectBtn.innerHTML = "Séléctionner";
    cardSelectBtn.setAttribute("class", "btn");
    cardSelectBtn.classList.add("btn_home");
    cardSelectBtn.setAttribute("title", "Séléctionner et personnaliser ce produit");
    cardSelectBtn.setAttribute("aria-label", "Sélectionner et personnaliser ce produit");
};

function contentValue(product) {
    // Content value
    imgParent.setAttribute("src", product.imageUrl);
    cardName.innerHTML = product.name;
    cardPrice.innerHTML = product.price + " €";
    cardDescription.innerHTML = product.description;
    cardLenses.innerHTML = product.lense.join(" ou ");
    // Button to select the product
    cardDescription.appendChild(cardSelectBtn);
    cardSelectBtn.setAttribute("href", "produit.html?" + product.id); // Product id is send in window.location.search
};
