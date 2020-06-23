/*=======================================================
GET call to API with Ajax and Fetch
=======================================================*/
const getProducts = async function () { // Create an async function
    let response = await fetch('http://localhost:3000/api/cameras/'); // Wait for the response from the server that contains the product data
    if (response.ok) { // IF the answer is "ok"
        let data = await response.json() // Wait for conversion of json response to object
        for (let i = 0; i < data.length; i++) { // Create a loop that traverses all the data
            function showProducts() { // Create a function that stores and displays my products
                const product = function (id, imageUrl, name, lenses, price, description) { // Create a object that stores the products
                    this.id = id;
                    this.imageUrl = imageUrl;
                    this.name = name;
                    this.lenses = lenses;
                    this.price = price;
                    this.description = description;
                } 
                const products = new product(data[i]._id, data[i].imageUrl, data[i].name, data[i].lenses, data[i].price, data[i].description); // Add the products in the object

                /*=======================================================
                Dynamically create and display content with product information
                =======================================================*/
                let productCardParent = document.getElementById("products-dynamic"); // Get the div of the section and create the content starting from this div
                let productsDiv = document.createElement("div");
                productCardParent.appendChild(productsDiv);
                productsDiv.setAttribute("id", "products");
                let productCard = document.createElement("div"); // New div
                productsDiv.appendChild(productCard);
                productCard.setAttribute("id", "product-card");
                let imgParent = document.createElement("img"); // New img (product image)
                productCard.appendChild(imgParent);
                imgParent.setAttribute("width", "400");
                imgParent.setAttribute("height", "400");
                imgParent.setAttribute("alt", "Voici l'un de nos modèle de caméra que vous pouvez retrouver sur Oricono'.");
                imgParent.setAttribute("src", products.imageUrl);
                let infosCard = document.createElement("div"); // New div
                productCard.appendChild(infosCard);
                infosCard.setAttribute("class", "infos-card");
                let cardName = document.createElement("h3"); // New h3 (product name)
                infosCard.appendChild(cardName);
                cardName.setAttribute("id", "cardName");
                cardName.innerHTML = products.name;
                let cardLenses = document.createElement("p"); // New p (product lenses)
                infosCard.appendChild(cardLenses);
                cardLenses.setAttribute("id", "cardLenses");
                
                /*=======================================================
                Display adaptable with the number of product lenses
                =======================================================*/
                if (products.lenses.length === 1) {
                    cardLenses.innerHTML = products.lenses[0];
                } else if (products.lenses.length === 2) {
                    cardLenses.innerHTML = products.lenses[0] + " ou " + products.lenses[1];
                } else if (products.lenses.length === 3) {
                    cardLenses.innerHTML = products.lenses[0] + " ou " + products.lenses[1] + " ou " + products.lenses[2];
                }
                let cardPrice = document.createElement("p"); // New p (product price)
                infosCard.appendChild(cardPrice);
                cardPrice.setAttribute("id", "cardPrice");
                cardPrice.innerHTML = products.price + " €";
                let cardDescription = document.createElement("p"); // New p (product description)
                infosCard.appendChild(cardDescription);
                cardDescription.setAttribute("id", "cardDescription");
                cardDescription.innerHTML = products.description;
                let cardSelectBtn = document.createElement("a"); // New a (button to select a product)
                cardDescription.appendChild(cardSelectBtn);
                cardSelectBtn.setAttribute("href", "produit.html?" + products.id); // Product id is send in window.location.search
                cardSelectBtn.setAttribute("title", "Séléctionner et personnaliser ce produit");
                cardSelectBtn.setAttribute("aria-label", "Sélectionner et personnaliser ce produit");
                cardSelectBtn.setAttribute("class", "btn");
                cardSelectBtn.classList.add("btn_home");
                cardSelectBtn.innerHTML = "Séléctionner";
            }
            showProducts()
        }
    } else { // ELSE (the server response is not "ok")
        console.error("Retour du serveur :", response.status); // Displays an error message with the status code of the request
    }
}
getProducts()
