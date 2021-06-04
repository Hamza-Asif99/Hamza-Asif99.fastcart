let checkFile = document.getElementsByTagName("body")[0];
let allImages = document.querySelectorAll(".anchor img");
let allTitles = document.querySelectorAll(".anchor h2");     //This script pulls data from the JSON file and onto the categories page
let allPrices = document.querySelectorAll(".anchor span")   // Belongs to categories.html
let allAnchors = document.querySelectorAll(".anchor")

let categoryToShow = localStorage.getItem("toLoad");

if(categoryToShow == "Men's Fashion"){
    document.getElementById("pageTitle").innerText = "Welcome To Men's Fashion";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);

            for(let i = 0; i < response[0].length;i++){
                allImages[i].setAttribute("src",response[0][i].images);
                allTitles[i].innerText = response[0][i].title; 
                allPrices[i].innerText ="$"+ response[0][i].prices;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[0][i].images);
                    localStorage.setItem("title",response[0][i].title);
                    localStorage.setItem("price","$"+response[0][i].prices);
                    localStorage.setItem("description",response[0][i].description);

                })

            }
        };
    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

if(categoryToShow == "Women's Fashion"){
    document.getElementById("pageTitle").innerText = "Welcome To Women's Fashion";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[1].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[1][i].shoeImages);
                allTitles[i].innerText = response[1][i].shoeTItles; 
                allPrices[i].innerText ="$"+ response[1][i].shoePRices;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[1][i].shoeImages);
                    localStorage.setItem("title",response[1][i].shoeTItles);
                    localStorage.setItem("price","$"+response[1][i].shoePRices);
                    localStorage.setItem("description",response[1][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Gym Clothing"){
    document.getElementById("pageTitle").innerText = "Break A Sweat";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[2].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[2][i].image);
                allTitles[i].innerText = response[2][i].title; 
                allPrices[i].innerText ="$"+ response[2][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[2][i].image);
                    localStorage.setItem("title",response[2][i].title);
                    localStorage.setItem("price","$"+response[2][i].price);
                    localStorage.setItem("description",response[2][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Computers"){
    document.getElementById("pageTitle").innerText = "Welcome To The World Of Power";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[3].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[3][i].image);
                allTitles[i].innerText = response[3][i].title; 
                allPrices[i].innerText ="$"+ response[3][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[3][i].image);
                    localStorage.setItem("title",response[3][i].title);
                    localStorage.setItem("price","$"+response[3][i].price);
                    localStorage.setItem("description",response[3][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Monitor"){
    document.getElementById("pageTitle").innerText = "Cutting Edge Displays";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[4].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[4][i].image);
                allTitles[i].innerText = response[4][i].title; 
                allPrices[i].innerText ="$"+ response[4][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[4][i].image);
                    localStorage.setItem("title",response[4][i].title);
                    localStorage.setItem("price","$"+response[4][i].price);
                    localStorage.setItem("description",response[4][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Phone"){
    document.getElementById("pageTitle").innerText = "The Best Phones On The Market";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[5].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[5][i].image);
                allTitles[i].innerText = response[5][i].title; 
                allPrices[i].innerText ="$"+ response[5][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[5][i].image);
                    localStorage.setItem("title",response[5][i].title);
                    localStorage.setItem("price","$"+response[5][i].price);
                    localStorage.setItem("description",response[5][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Pet Food"){
    document.getElementById("pageTitle").innerText = "Nutrients For Your Fluffy Companions";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[6].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[6][i].image);
                allTitles[i].innerText = response[6][i].title; 
                allPrices[i].innerText ="$"+ response[6][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[6][i].image);
                    localStorage.setItem("title",response[6][i].title);
                    localStorage.setItem("price","$"+response[6][i].price);
                    localStorage.setItem("description",response[6][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Pet Toys"){
    document.getElementById("pageTitle").innerText = "Fun Toys For Your Fluffy Companions";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[7].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[7][i].image);
                allTitles[i].innerText = response[7][i].title; 
                allPrices[i].innerText ="$"+ response[7][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[7][i].image);
                    localStorage.setItem("title",response[7][i].title);
                    localStorage.setItem("price","$"+response[7][i].price);
                    localStorage.setItem("description",response[7][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Hiking Gear"){
    document.getElementById("pageTitle").innerText = "Conquer The Trail";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[8].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[8][i].image);
                allTitles[i].innerText = response[8][i].title; 
                allPrices[i].innerText ="$"+ response[8][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[8][i].image);
                    localStorage.setItem("title",response[8][i].title);
                    localStorage.setItem("price","$"+response[8][i].price);
                    localStorage.setItem("description",response[8][i].description);

                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(categoryToShow == "Gym Equipment"){
    document.getElementById("pageTitle").innerText = "Let The Gains Begin";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[9].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[9][i].image);
                allTitles[i].innerText = response[9][i].title; 
                allPrices[i].innerText ="$"+ response[9][i].price;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[9][i].image);
                    localStorage.setItem("title",response[9][i].title);
                    localStorage.setItem("price","$"+response[9][i].price);
                    localStorage.setItem("description",response[9][i].description);
                })
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}


