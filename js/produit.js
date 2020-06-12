// Requête GET vers API afin de récupérer les données des produits.
let request = new XMLHttpRequest();
request.open('GET', "http://localhost:3000/api/cameras");
request.responseType = 'json';
request.send();
request.onload = function () {
    let produits = request.response; // Stock toute les données des produits dans un tableau de la taille du nombre de produit.



    function infosProduit(){ // Permet de modifier toute les informations du produit.
        let name = document.getElementById("name");
        let description = document.getElementById("description");
        let price = document.getElementById("price");
        name.innerHTML = produits.name;
        description.innerHTML = "Description : " + produits.description;
        price.innerHTML = "Prix : " + produits.price + " €";
    }



    function imgProduit() { // Permet de créer l'image du produit.
        let img = document.createElement("img");
        let imgParent = document.getElementById("imgParent");
        imgParent.appendChild(img);
        img.setAttribute("src", produits.imageUrl);
        img.classList.add("img-customize");
        img.setAttribute("alt", "Personnalier votre caméra pour valider votre commande chez Oricono.");
    }



    // Envoie la valeur des lentilles dans la premiere option du formulaire (les autres options s'adaptent plus tard selon le nombre de choix de lentille du produit)
    function formLense1() {
        let lense1 = document.getElementById("lense1");
        lense1.setAttribute("value", produits.lenses[0]);
        lense1.innerHTML = produits.lenses[0];
    }



    // Envoie les valeurs du produit dans le formulaire (ces infos ne sont pas visible pas l'utilisateur, cela permet d'envoyer des données vers la page panier.html)
    function formInfo() {
        let formName = document.getElementById("formName");
        let formPrice = document.getElementById("formPrice");
        let formId = document.getElementById("formId");
        formName.setAttribute("value", produits.name);
        formPrice.setAttribute("value", produits.price);
        formId.setAttribute("value", produits._id);
    }
    


    // Affiche les bonne informations celon le paramètre "hash" de l'URL ; Des options pour le choix de lentille sont également ajouter dans le formulaire celon le produit
    let formLenses = document.getElementById("formLenses");
    if (window.location.hash === "#5be1ed3f1c9d44000030b061") { // Premier produit
        produits = produits[0];
        lenses.innerHTML = "Lentilles : " + produits.lenses[0] + " ou " + produits.lenses[1];
        let lense2 = document.createElement("option");
        formLenses.appendChild(lense2);
        lense2.setAttribute("value", produits.lenses[1]);
        lense2.innerHTML = produits.lenses[1];
        imgProduit()
        infosProduit()
        formLense1()
        formInfo()
    } else if (window.location.hash === "#5be1ef211c9d44000030b062") { // Second produit
        produits = produits[1];
        lenses.innerHTML = "Lentilles : " + produits.lenses[0] + " ou " + produits.lenses[1] + " ou " + produits.lenses[2];
        let lense2 = document.createElement("option");
        formLenses.appendChild(lense2);
        lense2.setAttribute("value", produits.lenses[1]);
        lense2.innerHTML = produits.lenses[1];
        let lense3 = document.createElement("option");
        formLenses.appendChild(lense3);
        lense3.setAttribute("value", produits.lenses[2]);
        lense3.innerHTML = produits.lenses[2];
        imgProduit()
        infosProduit()
        formLense1()
        formInfo()
    } else if (window.location.hash === "#5be9bc241c9d440000a730e7") { // Troisième produit
        produits = produits[2];
        lenses.innerHTML = "Lentilles : " + produits.lenses[0];
        imgProduit()
        infosProduit()
        formLense1()
        formInfo()
    } else if (window.location.hash === "#5be9c4471c9d440000a730e8") { // Quatrième produit
        produits = produits[3];
        lenses.innerHTML = "Lentilles : " + produits.lenses[0] + " ou " + produits.lenses[1];
        let lense2 = document.createElement("option");
        formLenses.appendChild(lense2);
        lense2.setAttribute("value", produits.lenses[1]);
        lense2.innerHTML = produits.lenses[1];
        imgProduit()
        infosProduit()
        formLense1()
        formInfo()
    } else if (window.location.hash === "#5be9c4c71c9d440000a730e9") { // Cinquième produit
        produits = produits[4];
        lenses.innerHTML = "Lentilles : " + produits.lenses[0] + " ou " + produits.lenses[1] + " ou " + produits.lenses[2];
        let lense2 = document.createElement("option");
        formLenses.appendChild(lense2);
        lense2.setAttribute("value", produits.lenses[1]);
        lense2.innerHTML = produits.lenses[1];
        let lense3 = document.createElement("option");
        formLenses.appendChild(lense3);
        lense3.setAttribute("value", produits.lenses[2]);
        lense3.innerHTML = produits.lenses[2];
        imgProduit()
        infosProduit()
        formLense1()
        formInfo()
    }
}



document.querySelector("#form_customize").addEventListener("submit", function(e){ // Evenement lors de l'envoie du formulaire
    // Récupères les valeurs du formulaire lors de son envoie pour les stocké dans le sessionStorage
    let RecupId = document.querySelector("input[name='id']").value; 
    let RecupName = document.querySelector("input[name='name']").value;
    let RecupPrice = document.querySelector("input[name='price']").value;
    let RecupLenses = document.querySelector("option").value;
    let data ={
        id: RecupId,
        name: RecupName,
        price: RecupPrice,
        lenses: RecupLenses
    }
    // Création d'une nouvelle clé sessionStorage celon le nombre de produits stockés dans le session storage
    let dataJson = JSON.stringify(data);
    if (sessionStorage.length === 0) {
        sessionStorage.setItem('Select Article 1', dataJson); 
    } else if (sessionStorage.length === 1) {
        sessionStorage.setItem('Select Article 2', dataJson);
    } else if (sessionStorage.length === 2) {
        sessionStorage.setItem('Select Article 3', dataJson);
    } else if (sessionStorage.length >= 3){
        alert("Vous devez vider votre panier avant de pouvoir sélectionner un nouvel article.")      
    }
});