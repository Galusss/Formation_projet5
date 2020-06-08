let produit = document.getElementById("produit");
let lentille = document.getElementById("lentilles");
let prix = document.getElementById("prix");
let quantite = document.getElementById("quantite");
let total = document.getElementById("total");






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

/*
// Récupérer les informations du formulaire de contact 
$(document).ready(function () {
    $(".div-summary_form-btn").click(function () {//Lors du clic sur le bouton..
        let tb = $("#form").serializeArray(); // Transforme les données du formulaire en un tableau d'objets de la forme
        // Stockage de l'objet 'tb' dans le LocalStorage
        let tbJson = JSON.stringify(tb);
        localStorage.setItem('Infos de contact', tbJson);
        // Affiche les résultats dans la console
        console.log(tb); 
    });
});
*/