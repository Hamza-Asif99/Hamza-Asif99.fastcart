class item{
    // name;
    // quantity;
    // availableColors;
    // thumbnail;
    // stars;
    constructor(name,quantity,availableColors,thumbnail,stars,price,description){
        this.name = name;
        this.quantity = quantity;
        this.availableColors = availableColors;
        this.thumbnail = thumbnail;
        this.stars = stars;
        this.price = price;
        this.description = description;
    }
}

var item1 = new item("HP Pavilion Power 15",3,["black","white","grey"],'images/laptopItem.jpg',5,500,"Get any high demand task done with this multi purpose laptop powered by Intel <br> Processer: intel i7 7th Gen <br> RAM: 8GB <br> GPU: GTX 1050");
var item2 = new item("Plain Tees",10,["white","red","blue"],'images/tshirtItem.jpg',null,5,"Look fresh in the summer with these soft and comfortable plain tees");
var item3 = new item("Hiking Bag",8,["black","brown"],"images/bagItem.jpg",4,30,"Go to your favorite spots with this trusty and durable backpack. Made extra tough with stretchy material for those occassions where you just have to stuff everything!");
var item4 = new item("Blue Yeti Microphone",5,["red","black"],"images/micItem.jpg",4.5,100,"Crisp quality microphone perfect for any voice artists or musicians. Comes with the code for your supportive software download.");
var item5 = new item("Logitech G502",6,["white","black"],"images/mouseItem.jpg",4,50,"Amp up your gaming sessions with the high quality censor the G502 provides. Made durable with button life of almost 1million clicks. Happy Gaming !");
var item6 = new item("Nike Air Jordans",15,["red","black","white"],"images/shoesItem.jpg",5,250,"Get these limited edition Air Jordans by Nike. Available in white, red and black variants");

// console.log(item1.name);
// console.log(item1.thumbnail);
var all_item_images = document.querySelectorAll(".anchor img")
var all_item_headings = document.querySelectorAll(".anchor h2");
var all_item_descriptions = document.querySelectorAll(".item p");
var all_item_prices = document.querySelectorAll(".anchor span");

all_item_images[0].setAttribute("src",item1.thumbnail);
all_item_headings[0].innerHTML = item1.name;
all_item_descriptions[0].innerHTML = item1.description;
all_item_prices[0].innerHTML ="$"+ item1.price;

all_item_images[1].setAttribute("src",item2.thumbnail);
all_item_headings[1].innerHTML = item2.name;
all_item_descriptions[1].innerHTML = item2.description;
all_item_prices[1].innerHTML ="$"+ item2.price;

all_item_images[2].setAttribute("src",item3.thumbnail);
all_item_headings[2].innerHTML = item3.name;
all_item_descriptions[2].innerHTML = item3.description;
all_item_prices[2].innerHTML ="$"+ item3.price;


all_item_images[3].setAttribute("src",item4.thumbnail);
all_item_headings[3].innerHTML = item4.name;
all_item_descriptions[3].innerHTML = item4.description;
all_item_prices[3].innerHTML ="$"+ item4.price;


all_item_images[4].setAttribute("src",item5.thumbnail);
all_item_headings[4].innerHTML = item5.name;
all_item_descriptions[4].innerHTML = item5.description;
all_item_prices[4].innerHTML ="$"+ item5.price;


all_item_images[5].setAttribute("src",item6.thumbnail);
all_item_headings[5].innerHTML = item6.name;
all_item_descriptions[5].innerHTML = item6.description;
all_item_prices[5].innerHTML ="$"+ item6.price;

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

        // // if(categoryLI[i].innerHTML == "Clothing"){

        // // }
        // if(categoryLI[i].innerText == "Electronics"){

        //     document.querySelector(".clickToShow ul").children[1].style.display = "block";
        // }
        // if(categoryLI[i].innerText == "Accessories"){

        //     document.querySelector(".clickToShow ul").children[2].style.display = "block";
        // }
        // if(categoryLI[i].innerText == "Sports"){

        //     document.querySelector(".clickToShow ul").children[3].style.display = "block";
        // }
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


