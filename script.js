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

// var anchors = document.querySelectorAll("div.categoriesRow a");
// for(let i = 0; i< anchors.length;i++){
//     anchors[i].addEventListener("click",testingJSON);
// }

// function testingJSON(){

    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             var  response = JSON.parse(xhttp.responseText);
//             console.log(response[0].title);

//             var newP= document.createElement("p");
//             var text = document.createTextNode(response[1].prices);

//             newP.append(text);
            
//         }
//     };
//     xhttp.open("GET", "data.json", true);
//     xhttp.send();
// }
