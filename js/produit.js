let nom = document.getElementById("nom")
let marque = document.getElementById("marque")
let lentilles = document.getElementById("lentilles")
let description = document.getElementById("description")
let prix = document.getElementById("prix")
let lentille1 = document.getElementById("lense1")
let lentille2 = document.getElementById("lense2")
let formName = document.getElementById("choice-name")
let formPrix = document.getElementById("price")




// Création de l'objet concernant l'article 'Fuxi-480'
let fuxiJson = {
    nom: "Fuxi-480", 
    marque: "Fuxi",
    lentilles: "29mm ou 38mm",
    lentille1: "29mm",
    lentille2: "38mm",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    prix: 299
}

// Fonction permettant d'afficher les informations du produit sélectionner (page dynamique)
function produitFuxi() {
    // Stockage de l'objet 'fuxiJson' dans le LocalStorage
    let fuxi = JSON.stringify(fuxiJson);
    localStorage.setItem("Article Fuxi", fuxi);
    // Lecture de l'objet 'fuxiJson' qui est stocker dans le LocalStorage
    fuxi = localStorage.getItem("Article Fuxi");
    fuxiJson = JSON.parse(fuxi);
    // Affiche les informations du produit en les récupérant depuis le LocalStorage
    nom.innerHTML = fuxiJson.nom
    marque.innerHTML = "Marque : " + fuxiJson.marque
    lentilles.innerHTML = "Lentilles : " + fuxiJson.lentilles
    description.innerHTML = "Description : " + fuxiJson.description
    prix.innerHTML = "Prix : " + fuxiJson.prix + " €"
    // Afficher les bonne valeurs pour le formulaire ou les choix ne seront pas visible par l'user, cela permettra de les envoyer dans le localStorage
    formName.setAttribute("value", "Fuxi-480")
    formPrix.setAttribute("value", "299")
    // Afficher les bonnes valeurs pour le formulaire de choix des lentilles
    lense1.innerHTML = fuxiJson.lentille1
    lense2.innerHTML = fuxiJson.lentille2
    lense1.setAttribute("value", "29mm")
    lense2.setAttribute("value", "38mm")
    // Création d'une image pour mettre l'image représentant le produit
    let img = document.createElement("img")
    let imgParent = document.getElementById("imgParent")
    imgParent.appendChild(img)
    img.src = "images/fuxi480.jpg"
    img.classList.add("img-customize")
    img.setAttribute("width", "900px")
    img.setAttribute("height", "500px")
    img.setAttribute("alt", "Personnalier votre appareil photo Fuxi-480 pour valider votre commande chez Oricono.")
}



// Création de l'objet concernant l'article 'Kira-S50'
let kiraJson = {
    nom: "Kira-S50",
    marque: "Kira",
    lentilles: "49mm ou 37mm",
    lentille1: "49mm",
    lentille2: "37mm",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    prix: 809
}

// Fonction permettant d'afficher les informations du produit sélectionner (page dynamique)
function produitKira() {
    // Stockage de l'objet 'kiraJson' dans le LocalStorage
    let kira = JSON.stringify(kiraJson);
    localStorage.setItem("Article Kira", kira);
    // Lecture de l'objet 'kiraJson' qui est stocker dans le LocalStorage
    kira = localStorage.getItem("Article Kira");
    kiraJson = JSON.parse(kira);
    // Affiche les informations du produit en les récupérant depuis le LocalStorage
    nom.innerHTML = kiraJson.nom
    marque.innerHTML = "Marque : " + kiraJson.marque
    lentilles.innerHTML = "Lentilles : " + kiraJson.lentilles
    description.innerHTML = "Description : " + kiraJson.description
    prix.innerHTML = "Prix : " + kiraJson.prix + " €"
    // Afficher les bonne valeurs pour le formulaire ou les choix ne seront pas visible par l'user, cela permettra de les envoyer dans le localStorage
    formName.setAttribute("value", "Kira-S50")
    formPrix.setAttribute("value", "809")
    // Afficher les bonnes valeurs pour le formulaire de choix des lentilles
    lense1.innerHTML = kiraJson.lentille1
    lense2.innerHTML = kiraJson.lentille2
    lense1.setAttribute("value", "49mm")
    lense2.setAttribute("value", "37mm")
    // Création d'une image pour mettre l'image représentant le produit
    let img = document.createElement("img")
    let imgParent = document.getElementById("imgParent")
    imgParent.appendChild(img)
    img.src = "images/kiraS50.jpg"
    img.classList.add("img-customize")
    img.setAttribute("width", "900px")
    img.setAttribute("height", "500px")
    img.setAttribute("alt", "Personnalier votre appareil photo Kira-S50 pour valider votre commande chez Oricono.")
}



// Création de l'objet concernant l'article 'Boki-100T'
let bokiJson = {
    nom: "Boki-100T",
    marque: "Boki",
    lentilles: "31mm ou 16mm",
    lentille1: "31mm",
    lentille2: "16mm",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    prix: 1119
}

// Fonction permettant d'afficher les informations du produit sélectionner (page dynamique)
function produitBoki() {
    // Stockage de l'objet 'bokiJson' dans le LocalStorage
    let boki = JSON.stringify(bokiJson);
    localStorage.setItem("Article Boki", boki);
    // Lecture de l'objet 'bokiJson' qui est stocker dans le LocalStorage
    boki = localStorage.getItem("Article Boki");
    bokiJson = JSON.parse(boki);
    // Affiche les informations du produit en les récupérant depuis le LocalStorage
    nom.innerHTML = bokiJson.nom
    marque.innerHTML = "Marque : " + bokiJson.marque
    lentilles.innerHTML = "Lentilles : " + bokiJson.lentilles
    description.innerHTML = "Description : " + bokiJson.description
    prix.innerHTML = "Prix : " + bokiJson.prix + " €"
    // Afficher les bonne valeurs pour le formulaire ou les choix ne seront pas visible par l'user, cela permettra de les envoyer dans le localStorage
    formName.setAttribute("value", "Boki-100T")
    formPrix.setAttribute("value", "1119")
    // Afficher les bonnes valeurs pour le formulaire de choix des lentilles
    lense1.innerHTML = bokiJson.lentille1
    lense2.innerHTML = bokiJson.lentille2
    lense1.setAttribute("value", "31mm")
    lense2.setAttribute("value", "16mm")
    // Création d'une image pour mettre l'image représentant le produit
    let img = document.createElement("img")
    let imgParent = document.getElementById("imgParent")
    imgParent.appendChild(img)
    img.src = "images/Boki100T.jpg"
    img.classList.add("img-customize")
    img.setAttribute("width", "900px")
    img.setAttribute("height", "500px")
    img.setAttribute("alt", "Personnalier votre appareil photo Boki-100T pour valider votre commande chez Oricono.")
}



// Création de l'objet concernant l'article 'Tuxor'
let tuxorJson = {
    nom: "Tuxor",
    marque: "Tuxor",
    lentilles: "21mm ou 19mm",
    lentille1: "21mm",
    lentille2: "19mm",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    prix: 2098
}

// Fonction permettant d'afficher les informations du produit sélectionner (page dynamique)
function produitTuxor() {
    // Stockage de l'objet 'tuxorJson' dans le LocalStorage
    let tuxor = JSON.stringify(tuxorJson);
    localStorage.setItem("Article Tuxor", tuxor);
    // Lecture de l'objet 'tuxorJson' qui est stocker dans le LocalStorage
    tuxor = localStorage.getItem("Article Tuxor");
    tuxorJson = JSON.parse(tuxor);
    // Affiche les informations du produit en les récupérant depuis le LocalStorage
    nom.innerHTML = tuxorJson.nom
    marque.innerHTML = "Marque : " + tuxorJson.marque
    lentilles.innerHTML = "Lentilles : " + tuxorJson.lentilles
    description.innerHTML = "Description : " + tuxorJson.description
    prix.innerHTML = "Prix : " + tuxorJson.prix + " €"
    // Afficher les bonne valeurs pour le formulaire ou les choix ne seront pas visible par l'user, cela permettra de les envoyer dans le localStorage
    formName.setAttribute("value", "Tuxor")
    formPrix.setAttribute("value", "2098")
    // Afficher les bonnes valeurs pour le formulaire de choix des lentilles
    lense1.innerHTML = tuxorJson.lentille1
    lense2.innerHTML = tuxorJson.lentille2
    lense1.setAttribute("value", "21mm")
    lense2.setAttribute("value", "19mm")
    // Création d'une image pour mettre l'image représentant le produit
    let img = document.createElement("img")
    let imgParent = document.getElementById("imgParent")
    imgParent.appendChild(img)
    img.src = "images/tuxor.jpg"
    img.classList.add("img-customize")
    img.setAttribute("width", "900px")
    img.setAttribute("height", "500px")
    img.setAttribute("alt", "Personnalier votre appareil photo Tuxor pour valider votre commande chez Oricono.")
}



// Création de l'objet concernant l'article 'Piker'
let pikerJson = {
    nom: "Piker",
    marque: "Piker",
    lentilles: "19mm ou 29mm",
    lentille1: "19mm",
    lentille2: "29mm",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    prix: 2479
}

// Fonction permettant d'afficher les informations du produit sélectionner (page dynamique)
function produitPiker() {
    // Stockage de l'objet 'tuxorJson' dans le LocalStorage
    let piker = JSON.stringify(pikerJson);
    localStorage.setItem("Article Piker", piker);
    // Lecture de l'objet 'tuxorJson' qui est stocker dans le LocalStorage
    piker = localStorage.getItem("Article Piker");
    pikerJson = JSON.parse(piker);
    // Affiche les informations du produit en les récupérant depuis le LocalStorage
    nom.innerHTML = pikerJson.nom
    marque.innerHTML = "Marque : " + pikerJson.marque
    lentilles.innerHTML = "Lentilles : " + pikerJson.lentilles
    description.innerHTML = "Description : " + pikerJson.description
    prix.innerHTML = "Prix : " + pikerJson.prix + " €"
    // Afficher les bonne valeurs pour le formulaire ou les choix ne seront pas visible par l'user, cela permettra de les envoyer dans le localStorage
    formName.setAttribute("value", "Piker")
    formPrix.setAttribute("value", "2479")
    // Afficher les bonnes valeurs pour le formulaire de choix des lentilles
    lense1.innerHTML = pikerJson.lentille1
    lense2.innerHTML = pikerJson.lentille2
    lense1.setAttribute("value", "19mm")
    lense2.setAttribute("value", "29mm")
    // Création d'une image pour mettre l'image représentant le produit
    let img = document.createElement("img")
    let imgParent = document.getElementById("imgParent")
    imgParent.appendChild(img)
    img.src = "images/piker.jpg"
    img.classList.add("img-customize")
    img.setAttribute("width", "900px")
    img.setAttribute("height", "500px")
    img.setAttribute("alt", "Personnalier votre appareil photo Piker pour valider votre commande chez Oricono.")
}



// Appel de la bonne fonction selon l'URL détecté par window.location (1 URL différent pour chaque produit)
function AfficheMonProduit() {
    let Adress = window.location;
    if (Adress ==  /* GITHUB ->*/ "https://galusss.github.io/Formation_projet5/produit.html#Fuxi" /*LOCAL -> "file:///D:/GitHub/Formation_projet5/produit.html#Fuxi"*/) {
        produitFuxi()
    } else if (Adress ==  /* GITHUB ->*/ "https://galusss.github.io/Formation_projet5/produit.html#Kira" /*LOCAL -> "file:///D:/GitHub/Formation_projet5/produit.html#Kira"*/) {
        produitKira()
    } else if (Adress ==  /* GITHUB ->*/ "https://galusss.github.io/Formation_projet5/produit.html#Boki" /*LOCAL -> "file:///D:/GitHub/Formation_projet5/produit.html#Boki"*/) {
        produitBoki()
    } else if (Adress ==  /* GITHUB ->*/ "https://galusss.github.io/Formation_projet5/produit.html#Tuxor" /*LOCAL -> "file:///D:/GitHub/Formation_projet5/produit.html#Tuxor"*/) {
        produitTuxor()
    } else if (Adress ==  /* GITHUB ->*/ "https://galusss.github.io/Formation_projet5/produit.html#Piker" /*LOCAL -> "file:///D:/GitHub/Formation_projet5/produit.html#Piker"*/) {
        produitPiker()
    }
}
AfficheMonProduit() // Appel de la fonction qui entrainera l'appel de la bonne fonction selon le produit choisis




// Lors du click sur le bouton du formulaire la fonction "produitSelectionne" est appliquer
let btn = document.getElementById("btn_produit")
btn.addEventListener("click", produitSelectionner)

// Fonction permetant d'enregistrer les données du formulaire dans le localStorage, cela va permettre de pouvoir afficher le produit séléctionner dans le récap de commande. 
function produitSelectionner(){
    let produitSelectJson = {
        nom: document.getElementById("choice-name").value,
        prix:document.getElementById("price").value,
        lentilles:document.getElementById("lenses").value,
    }
    let produitSelect = JSON.stringify(produitSelectJson);
    localStorage.setItem("Produit Sélectionné", produitSelect);
    // Si l'utilisateur choisis un nouveau produits celui si sera stocké dans un nouveau objet depuis le localStorage
    var produits = "Produit Séléctionné";
    var produitstID = localStorage.length + 1;
    localStorage[produits + produitstID] = produitSelect;

}
