
var allImages = document.querySelectorAll(".anchor img")
var allTitles = document.querySelectorAll(".anchor h2");
var allDescriptions = document.querySelectorAll(".item p");
var allPrices= document.querySelectorAll(".anchor span");
let allAnchors = document.querySelectorAll(".anchor")

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  response = JSON.parse(xhttp.responseText);
            console.log(response[10].length);
            for(let i = 0; i < response[10].length;i++){
                allImages[i].setAttribute("src",response[10][i].image);
                allTitles[i].innerText = response[10][i].title; 
                allPrices[i].innerText ="$"+ response[10][i].price;
                allDescriptions[i].innerText =response[10][i].description;

                allAnchors[i].addEventListener("click",function(){
                    localStorage.setItem("image",response[10][i].image);
                    localStorage.setItem("title",response[10][i].title);
                    localStorage.setItem("price","$"+response[10][i].price);
                    localStorage.setItem("description",response[10][i].description);
                })

            }
        };
    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();


var categoryLI = document.querySelectorAll(".categories ul li a");
// console.log(categoryLI[0].innerText);
for(let i =0;i<categoryLI.length;i++){
    categoryLI[i].addEventListener("click",function(){
       
        document.getElementById("mainMenu").style.display = "block";
        
        // document.querySelector(".clickToShow").style.display = "block";
        document.querySelector(".categories").style.display = "none";
        const text = categoryLI[i].innerText;
        document.getElementById("h2").innerText = text;

        var uls = document.querySelectorAll(".clickToShow ul");
        
        // document.querySelectorAll(".clickToShow ul")[i].style.display="block";
        
        // uls[0].style.display = "block";k
        if(document.getElementById("h2").innerText.localeCompare("Clothing") == 0){
            // document.querySelector(".ulClothing").style.display = "block";
            uls[0].style.display = "block";
            

        }
        if(document.getElementById("h2").innerText.localeCompare("Electronics") == 0){
            // document.querySelector(".ulClothing").style.display = "block";
            uls[1].style.display = "block";
            

        }
        if(document.getElementById("h2").innerText.localeCompare("Accessories") == 0){
            // document.querySelector(".ulClothing").style.display = "block";
            uls[2].style.display = "block";
            

        }
        if(document.getElementById("h2").innerText.localeCompare("Sports") == 0){
            // document.querySelector(".ulClothing").style.display = "block";
            uls[3].style.display = "block";
            

        }

    });
}
var mainMenu = document.getElementById("mainMenu").addEventListener("click",function(){
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("h2").innerText = "";

    document.querySelector(".categories").style.display = "block";
    document.querySelectorAll(".clickToShow ul")[0].style.display="none";
    document.querySelectorAll(".clickToShow ul")[1].style.display="none";
    document.querySelectorAll(".clickToShow ul")[2].style.display="none";
    document.querySelectorAll(".clickToShow ul")[3].style.display="none";
});




