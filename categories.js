let checkFile = document.getElementsByTagName("body")[0];
let allImages = document.querySelectorAll(".anchor img");
let allTitles = document.querySelectorAll(".anchor h2");
let allPrices = document.querySelectorAll(".anchor span")

if(checkFile.getAttribute("class") == "mensFashion"){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);

            for(let i = 0; i < response[0].length;i++){
                allImages[i].setAttribute("src",response[0][i].images);
                allTitles[i].innerText = response[0][i].title; 
                allPrices[i].innerText ="$"+ response[0][i].prices;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

if(checkFile.getAttribute("class") == "womensFashion"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[1].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[1][i].shoeImages);
                allTitles[i].innerText = response[1][i].shoeTItles; 
                allPrices[i].innerText ="$"+ response[1][i].shoePRices;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "gymClothing"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[2].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[2][i].image);
                allTitles[i].innerText = response[2][i].title; 
                allPrices[i].innerText ="$"+ response[2][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "computers"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[3].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[3][i].image);
                allTitles[i].innerText = response[3][i].title; 
                allPrices[i].innerText ="$"+ response[3][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "monitors"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[4].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[4][i].image);
                allTitles[i].innerText = response[4][i].title; 
                allPrices[i].innerText ="$"+ response[4][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "phones"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[5].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[5][i].image);
                allTitles[i].innerText = response[5][i].title; 
                allPrices[i].innerText ="$"+ response[5][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "petFood"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[6].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[6][i].image);
                allTitles[i].innerText = response[6][i].title; 
                allPrices[i].innerText ="$"+ response[6][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "petToys"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[7].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[7][i].image);
                allTitles[i].innerText = response[7][i].title; 
                allPrices[i].innerText ="$"+ response[7][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "hikingGear"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[8].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[8][i].image);
                allTitles[i].innerText = response[8][i].title; 
                allPrices[i].innerText ="$"+ response[8][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}
if(checkFile.getAttribute("class") == "gymEquipment"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            
            for(let i = 0; i < response[9].length;i++){
                // console.log(response[1][1].shoeTItles);
                allImages[i].setAttribute("src",response[9][i].image);
                allTitles[i].innerText = response[9][i].title; 
                allPrices[i].innerText ="$"+ response[9][i].price;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}


