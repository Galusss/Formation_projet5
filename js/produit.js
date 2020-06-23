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
                Display product information if the id is present in the window.location.search
                =======================================================*/
                let searchId = "?" + products.id;
                if (window.location.search.indexOf(searchId) > -1) { // IF the location.search is identical to the product id

                    /*=======================================================
                    Dynamically create and display content with product information
                    =======================================================*/
                    let productCardParent = document.getElementById("custom-and-select"); // Get the div of the section and create the content starting from this div
                    let productSelect = document.createElement("div"); // New div
                    productCardParent.appendChild(productSelect);
                    productSelect.setAttribute("class", "product-select");
                    let imgParent = document.createElement("div"); // New div
                    productSelect.appendChild(imgParent);
                    imgParent.setAttribute("class", "imgParent");
                    let imgProduct = document.createElement("img"); // New img (product image)
                    imgParent.appendChild(imgProduct);
                    imgProduct.setAttribute("src", products.imageUrl);
                    imgProduct.classList.add("img-customize");
                    imgProduct.setAttribute("alt", "Personnalier votre caméra pour valider votre commande chez Oricono.");
                    let productName = document.createElement("p"); // New p (product name)
                    productSelect.appendChild(productName);
                    productName.setAttribute("class", "name");
                    productName.innerHTML = products.name;
                    let productLenses = document.createElement("p"); // New p (product lenses)
                    productSelect.appendChild(productLenses);
                    productLenses.setAttribute("class", "lenses");
                    productLenses.innerHTML = "Lentilles : " + products.lenses;

                    /*=======================================================
                    Display adaptable with the number of product lenses
                    =======================================================*/
                    if (products.lenses.length === 1) {                     
                        productLenses.innerHTML = products.lenses[0];
                    } else if (products.lenses.length === 2) {
                        productLenses.innerHTML = products.lenses[0] + " ou " + products.lenses[1];
                    } else if (products.lenses.length === 3) {
                        productLenses.innerHTML = products.lenses[0] + " ou " + products.lenses[1] + " ou " + products.lenses[2];
                    }
                    let productDescription = document.createElement("p"); // New p (product description)
                    productSelect.appendChild(productDescription);
                    productDescription.setAttribute("class", "description");
                    productDescription.innerHTML = products.description;
                    let productPrice = document.createElement("p"); // New p (product price)
                    productSelect.appendChild(productPrice);
                    productPrice.setAttribute("class", "price");
                    productPrice.innerHTML = products.price + " €";

                    /*=======================================================
                    Create a form to choose lenses
                    =======================================================*/
                    let lenseSelectForm = document.createElement("form"); // New form (lenses selection form)
                    productSelect.appendChild(lenseSelectForm);
                    lenseSelectForm.setAttribute("action", "panier.html");
                    lenseSelectForm.setAttribute("method", "POST");
                    let divForm = document.createElement("div"); // New div
                    lenseSelectForm.appendChild(divForm);
                    divForm.setAttribute("class", "choice-lenses");
                    let labelForm = document.createElement("label"); // New label
                    divForm.appendChild(labelForm);
                    labelForm.setAttribute("for", "formLenses");
                    labelForm.innerHTML = "Choisissez vos lentilles :";
                    let selectForm = document.createElement("select"); // New select
                    labelForm.appendChild(selectForm);
                    selectForm.setAttribute("for", "formLenses");
                    selectForm.setAttribute("name", "formLenses");
                    selectForm.setAttribute("class", "select-lenses");
                    selectForm.setAttribute("aria-label", "Choisissez une lentilles");           
                    let divBtn = document.createElement("div"); // New div
                    divForm.appendChild(divBtn);
                    let btn = document.createElement("button"); // New btn (validation form button)
                    divBtn.appendChild(btn);
                    btn.setAttribute("type", "submit");
                    btn.setAttribute("class", "btn");
                    btn.classList.add("btn-customize");
                    btn.setAttribute("aria-label", "Valider votre produit et dirigez vous vers votre panier Oricono");
                    btn.innerHTML = "Valider";
                    for (let i = 0; i < products.lenses.length; i++) { // Create a loop that searches for all the lenses in the product
                        let optionForm = document.createElement("option"); // New option
                        selectForm.appendChild(optionForm);
                        optionForm.setAttribute("id", "lense");
                        optionForm.setAttribute("value", products.lenses[i]);
                        optionForm.setAttribute("selected", "false");
                        optionForm.innerHTML = products.lenses[i];

                        /*=======================================================
                        When the form is submitted
                        =======================================================*/
                        lenseSelectForm.addEventListener("submit", function (event) { // Create event function
                            if (optionForm.selected === true) { // IF option is select              
                                var productSelected = JSON.parse(sessionStorage.getItem("productSelected") || "[]"); // Define storage in javascript object
                                if (productSelected.length < 5) { // IF there are less than 3 products stored
                                    let data = { // Get the values of the selected products
                                        id: products.id,
                                        name: products.name,
                                        price: products.price,
                                        lenses: optionForm.value
                                    };
                                    productSelected.push(data); // Add an element to the object data
                                    sessionStorage.setItem("productSelected", JSON.stringify(productSelected)); // Store product in sessionStorage
                                } else { // ELSE
                                    alert("Vous devez vider votre panier avant de commander un nouveau produit.")
                                }        
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
