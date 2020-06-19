// Requête GET vers API afin de récupérer les données des produits
let request = new XMLHttpRequest();
request.open('GET', "http://localhost:3000/api/cameras");
request.responseType = 'json';
request.send();
request.onload = function () {
    var produits = request.response;
    for(let i = 0; i < produits.length; i++) { // Permet de parcourir toute les données des différents produits et de tout stocké dans une seule variable.
        let infoProduits = {
            name: produits[i].name,
            lenses: produits[i].lenses,
            description: produits[i].description,
            price: produits[i].price,
            imageUrl: produits[i].imageUrl,
            _id: produits[i]._id
        }
        let img = document.createElement("img"); // Création de la variable "img" qui créer un élément image, cette variable est servira pout tout les produits
        function imgAttribute(){ // Tout les attributs communs des images intégré a la page d'acceuil afin de ne pas les répeter
            img.setAttribute("width", "350");
            img.setAttribute("height", "300");
            img.setAttribute("alt", "Voici l'un de nos modèle de caméra que vous pouvez retrouver sur Oricono'.");
            img.setAttribute("src", infoProduits.imageUrl);
        }
        // Les informations et les images des différents produits s'affichent correctement dans l'ordre sur la page d'accueil selon l'ID du produit
        if (infoProduits._id === "5be1ed3f1c9d44000030b061") { // Premier produit
            let name = document.getElementById("card-name-zurss");
            let lenses = document.getElementById("card-lenses-zurss");
            let description = document.getElementById("card-description-zurss");
            let price = document.getElementById("card-price-zurss");
            let imgParent = document.getElementById("imgParent-card-camera-zurss");
            name.innerHTML = infoProduits.name;
            lenses.innerHTML = "Lentilles : " + infoProduits.lenses[0] + " ou " + infoProduits.lenses[1];
            description.innerHTML = "Description : " + infoProduits.description; 
            price.innerHTML = "Prix : " + infoProduits.price + " €";
            imgParent.appendChild(img);
            img.setAttribute("id", "img-card-camera-zurss");
            imgAttribute()
        } else if (infoProduits._id === "5be1ef211c9d44000030b062") { // Second produit
            let name = document.getElementById("card-name-hirsch");
            let lenses = document.getElementById("card-lenses-hirsch");
            let description = document.getElementById("card-description-hirsch");
            let price = document.getElementById("card-price-hirsch");
            let imgParent = document.getElementById("imgParent-card-camera-hirsch");
            name.innerHTML = infoProduits.name;
            lenses.innerHTML = "Lentilles : " + infoProduits.lenses[0] + " ou " + infoProduits.lenses[1] + " ou " + infoProduits.lenses[2];
            description.innerHTML = "Description : " + infoProduits.description; 
            price.innerHTML = "Prix : " + infoProduits.price + " €";
            imgParent.appendChild(img);
            img.setAttribute("id", "img-card-camera-hirsch");
            imgAttribute()
        } else if (infoProduits._id === "5be9bc241c9d440000a730e7") { // Troisième produit
            let name = document.getElementById("card-name-franck");
            let lenses = document.getElementById("card-lenses-franck");
            let description = document.getElementById("card-description-franck");
            let price = document.getElementById("card-price-franck");
            let imgParent = document.getElementById("imgParent-card-camera-franck");
            name.innerHTML = infoProduits.name;
            lenses.innerHTML = "Lentilles : " + infoProduits.lenses;
            description.innerHTML = "Description : " + infoProduits.description;
            price.innerHTML = "Prix : " + infoProduits.price + " €";
            imgParent.appendChild(img);
            img.setAttribute("id", "img-card-camera-franck");
            imgAttribute()
        } else if (infoProduits._id === "5be9c4471c9d440000a730e8") { // Quatrième produit
            let name = document.getElementById("card-name-kuros");
            let lenses = document.getElementById("card-lenses-kuros");
            let description = document.getElementById("card-description-kuros");
            let price = document.getElementById("card-price-kuros");
            let imgParent = document.getElementById("imgParent-card-camera-kuros");
            name.innerHTML = infoProduits.name;
            lenses.innerHTML = "Lentilles : " + infoProduits.lenses[0] + " ou " + infoProduits.lenses[1];
            description.innerHTML = "Description : " + infoProduits.description;
            price.innerHTML = "Prix : " + infoProduits.price + " €";
            imgParent.appendChild(img);
            img.setAttribute("id", "img-card-camera-kuros");
            imgAttribute()
        } else if (infoProduits._id === "5be9c4c71c9d440000a730e9") { // Cinquième produit
            let name = document.getElementById("card-name-katatone");
            let lenses = document.getElementById("card-lenses-katatone");
            let description = document.getElementById("card-description-katatone");
            let price = document.getElementById("card-price-katatone");
            let imgParent = document.getElementById("imgParent-card-camera-katatone");
            name.innerHTML = infoProduits.name;
            lenses.innerHTML = "Lentilles : " + infoProduits.lenses[0] + " ou " + infoProduits.lenses[1] + " ou " + infoProduits.lenses[2];
            description.innerHTML = "Description : " + infoProduits.description;
            price.innerHTML = "Prix : " + infoProduits.price + " €";
            imgParent.appendChild(img);
            img.setAttribute("id", "img-card-camera-katatone");
            imgAttribute()
        }
    }
}
