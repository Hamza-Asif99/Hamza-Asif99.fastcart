function readData(){
    // var image = getCookie("img");
    // var title = getCookie("title");
    // var price = getCookie("price");
    // console.log(data);
    var image = localStorage.getItem("image");
    var title = localStorage.getItem("title");
    var price = localStorage.getItem("price");

    document.getElementById("productImage").setAttribute("src",image);
    document.getElementById("productTitle").innerText = title;
    document.getElementById("productPrice").innerText = price;

    localStorage.setItem("img",0);
    localStorage.setItem("title",0);
    localStorage.setItem("price",0);

}

readData();
