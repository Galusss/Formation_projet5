// Fonction permettant d'afficher le récapitulatif de commande
function recap(){
    let produit = document.getElementById("produit");
    let lentille = document.getElementById("lentilles");
    let prix = document.getElementById("prix");
    produitSelect = localStorage.getItem("Produit Sélectionné"); // Récupère les éléments stockés dans le localStorage
    produitSelectJson = JSON.parse(produitSelect); // Convertions en JSON afin de pouvoir sélectionner chaque objet stocké
    lentille.innerHTML = produitSelectJson.lentilles;
    produit.innerHTML = produitSelectJson.nom;
    prix.innerHTML = produitSelectJson.prix + " €"
}
recap()

// Fonction permettant d'afficher le montant total depuis le récapitulatif de commande
function totalPrice(){
    let total = document.getElementById("total");
    total.innerHTML = produitSelectJson.prix+ " €"
}
totalPrice()



/*
// Permet de parcourir toute les données stockés dans le localStorage
for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
    console.log(i)
}
*/

/*
// Permet de récupérer toute les informations des produits stockés dans le localStorage en JSON
function infoArticle() {
    // Récupération des données des articles
    let fuxiJson = localStorage.getItem("Article Fuxi");
    let fuxi = JSON.parse(fuxiJson);
    let kiraJson = localStorage.getItem("Article Kira");
    let kira = JSON.parse(kiraJson);
    let bokiJson = localStorage.getItem("Article Boki");
    let boki = JSON.parse(bokiJson);
    let tuxorJson = localStorage.getItem("Article Tuxor");
    let tuxor = JSON.parse(tuxorJson);
    let pikerJson = localStorage.getItem("Article Piker");
    let piker = JSON.parse(pikerJson);
    console.log(fuxi)
    console.log(kiraJson)
    console.log(boki.nom)
    console.log(boki.description)
}
infoArticle()
*/

