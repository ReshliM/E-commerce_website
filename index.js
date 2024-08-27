var toggle=document.querySelector(".toggle-nav-bar");
var sidenav=document.querySelector(".side-nav-bar");
function showSidenav(){
sidenav.style.display="block";
}
function closeSidenav(){
    sidenav.style.display="none";
    }

    /*search*/

    var search_box = document.getElementById("search"); // Selecting search box
var productContainer = document.getElementById("product"); // Correcting variable name
var product_list = productContainer.querySelectorAll(".s1"); // Selecting all product divs

search_box.addEventListener("keyup", function(event) { // Add event parameter here
    var entered_text = event.target.value.toUpperCase();

    for (var count = 0; count < product_list.length; count++) {
        var product_name = product_list[count].querySelector("h6").textContent.toUpperCase();

        if (product_name.indexOf(entered_text) < 0) {
            product_list[count].style.display = "none";
        } else {
            product_list[count].style.display = "block";
        }
    }
});

//single product


 