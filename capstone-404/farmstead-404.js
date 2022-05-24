
function barMenu(){
    document.getElementById("dropdown-child").style.display = "block"
    document.getElementById("hide-menu").style.display = "block"
    document.getElementById("show-menu").style.display = "none"
}
function hideMenu(){
    document.getElementById("dropdown-child").style.display = "none"
    document.getElementById("hide-menu").style.display = "none"
    document.getElementById("show-menu").style.display = "block"
}
function nightMode(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

    var h3Els = document.getElementsByTagName("h3");
    console.log(h3Els)
    for (var i = 0; i < h3Els.length; i++){
    h3Els[i].style.color = "white";
}
    document.getElementById("day-mode").style.display = "block"
    document.getElementById("night-mode").style.display = "none"
    
    document.getElementById("dropdown-child").style.backgroundColor = "black"
    var dropdownChild = document.querySelectorAll("#dropdown-child > a")
    for (var i = 0; i < dropdownChild.length; i++) {
    dropdownChild[i].style.color = "white";
    }
    
    document.getElementsByClassName("page-link").style.backgroundColor = "black"

}
function dayMode(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.getElementById("day-mode").style.display = "none"
    document.getElementById("night-mode").style.display = "block"
}