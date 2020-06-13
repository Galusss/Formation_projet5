// Récupération des articles qui ont été séléctionnés puis stocké dans le sessionStorage
let productSelectValue1 = JSON.parse(window.sessionStorage.getItem("Select Article 1"));
let productSelectValue2 = JSON.parse(window.sessionStorage.getItem("Select Article 2"));
let productSelectValue3 = JSON.parse(window.sessionStorage.getItem("Select Article 3"));



// Déclaration des variable concernant le tableau "récapitulatif de commande"
let product = document.getElementById("product");
let lenses = document.getElementById("lenses");
let price = document.getElementById("price");
let produit2 = document.getElementById("produitB");
let product2 = document.getElementById("product2");
let lenses2 = document.getElementById("lenses2");
let price2 = document.getElementById("price2");
let produit3 = document.getElementById("produitC");
let product3 = document.getElementById("product3");
let lenses3 = document.getElementById("lenses3");
let price3 = document.getElementById("price3");

// Affiche les bonnes informations dans le tableau de récapitulatif pour chaque produit
function produitA() {
    product.innerHTML = productSelectValue1.name;
    lenses.innerHTML = productSelectValue1.lenses;
    price.innerHTML = productSelectValue1.price + " €";
}
function produitB() {
    product2.innerHTML = productSelectValue2.name;
    lenses2.innerHTML = productSelectValue2.lenses;
    price2.innerHTML = productSelectValue2.price + " €";
}
function produitC() {
    product3.innerHTML = productSelectValue3.name;
    lenses3.innerHTML = productSelectValue3.lenses;
    price3.innerHTML = productSelectValue3.price + " €";
}

// Afficher le recap de commande qui s'adaptera selon le nombre d'article stocké dans le sessionStorage
function showRecap() {
    if (sessionStorage.length === 0) {
        produit2.style.display = "none";
        produit3.style.display = "none";
    } else if (sessionStorage.length === 1) { // Si un article est présent dans le sessionStorage
        produitA() // Afficher les infos du produits
        produit2.style.display = "none"; // Retirer les lignes du tableau qui sont inutles
        produit3.style.display = "none"; 
        let parseTotal = parseInt(productSelectValue1.price) // Convertis le texte "price" en nombre pour afficher le prix total
        total.innerHTML = "TOTAL : " + (parseTotal) + " €";
    } else if (sessionStorage.length === 2) {
        produitA()
        produitB()   
        produit3.style.display = "none";
        let parseTotal = parseInt(productSelectValue1.price);
        let parseTotal2 = parseInt(productSelectValue2.price);
        total.innerHTML = "TOTAL : " + (parseTotal + parseTotal2) + " €";
    } else if (sessionStorage.length === 3) {
        produitA()
        produitB()
        produitC()
        let parseTotal = parseInt(productSelectValue1.price);
        let parseTotal2 = parseInt(productSelectValue2.price);
        let parseTotal3 = parseInt(productSelectValue3.price);
        total.innerHTML = "TOTAL : " + (parseTotal + parseTotal2 + parseTotal3) + " €";
    }
}
showRecap()

// Bouton permettant de vider lee panier et de réinitialiser le tableau récap de commande
let btnClear = document.getElementById("btn-tableau")
btnClear.addEventListener("click", clearRecap)
function clearRecap() {
    sessionStorage.clear()
    product.innerHTML = "/";
    lenses.innerHTML = "/";
    price.innerHTML = "/";
    total.innerHTML = "Total";
    produit2.style.display = "none";
    produit3.style.display = "none";
}



// Génère un id de commande aléatoire qui sera envoyer avec le formulaire
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomId = "ORI" + entierAleatoire(109999999, 909999999); // Génère un numéro de commande compris entre 109999999 et 909999999

// Lorsque le formulaire est envoyer les valeurs des champs sont récupérer
let form = document.getElementById("forms");
form.addEventListener("submit", function(event) {
    if (sessionStorage.length === 0) { // Si le panier est vide le formulaire de commande ne s'envoie pas
        event.preventDefault()
        alert("Votre panier est vide, vous ne pouvez pas confirmer votre commande.")
    } else {
        let orderId = document.getElementById("orderId")
        orderId.setAttribute("value", randomId) // La valeur du numéro de commande est intégré au formulaire
        let totalPrix = document.getElementById("totalPrix");
        totalPrix.setAttribute("value", total.innerText) // La valeur du prix total de la commande est intégré au formulaire
        let formContact = {
            nom: document.forms["form"]["nom"].value,
            prenom: document.forms["form"]["first-name"].value,
            mail: document.forms["form"]["mail"].value,
            adresse: document.forms["form"]["adress"].value,
            ville: document.forms["form"]["city"].value,
            idCommande: document.forms["form"]["id"].value,
            prixTotal: document.forms["form"]["total"].value
        }
        console.log(formContact) // console.log(JSON.stringify(formContact))

      // Lorsque le formulaire est envoyer les infos des produits présent dans le tableau "recap de commande" sont récupérer
    } if (sessionStorage.length === 1) {
        let tabProduit = {
            "produit1": productSelectValue1.name,
            "infos produit": {
                "lentilles": productSelectValue1.lenses,
                "prix": productSelectValue1.price,
                "id": productSelectValue1.id,
            }
        }
        console.log(tabProduit) // console.log(JSON.stringify(tabProduit))
    } else if (sessionStorage.length === 2) {
        let tabProduit = {
            "produit1": productSelectValue1.name,
            "infos produit": {
                "lentilles": productSelectValue1.lenses,
                "prix": productSelectValue1.price,
                "idProduit": productSelectValue1.id,
            },
            "produit2": productSelectValue2.name,
            "infos produit2": {
                "lentilles": productSelectValue2.lenses,
                "prix": productSelectValue2.price,
                "idProduit": productSelectValue2.id,
            },
        }
        console.log(tabProduit) // console.log(JSON.stringify(tabProduit))
    } else if (sessionStorage.length === 3) {
        let tabProduit = {
            "produit1": productSelectValue1.name,
            "infos produit": {
                "lentilles": productSelectValue1.lenses,
                "prix": productSelectValue1.price,
                "idProduit": productSelectValue1.id,
            },
            "produit2": productSelectValue2.name,
            "infos produit2": {
                "lentilles": productSelectValue2.lenses,
                "prix": productSelectValue2.price,
                "idProduit": productSelectValue2.id,
            },
            "produit3": productSelectValue3.name,
            "infos produit3": {
                "lentilles": productSelectValue3.lenses,
                "prix": productSelectValue3.price,
                "idProduit": productSelectValue3.id,
            },
        }
        console.log(tabProduit) // console.log(JSON.stringify(tabProduit)) 
    }
});
