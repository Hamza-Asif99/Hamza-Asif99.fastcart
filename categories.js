var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var  response = JSON.parse(xhttp.responseText);
            console.log(response[0].title);

            document.getElementsByTagName("img")[0].setAttribute("src",response[0].images);
            // img.src=response[0].images-src;
            
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();