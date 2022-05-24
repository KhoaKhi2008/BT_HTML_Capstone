function shiftPage2(){
    document.getElementById("page-2").style.display = "block"
    document.getElementById("page-1").style.display = "none"
    document.getElementById("prev").style.display = "block"
    document.getElementById("next").style.display = "none"

}
function shiftPage1(){
    document.getElementById("page-2").style.display = "none"
    document.getElementById("page-1").style.display = "block"
    document.getElementById("prev").style.display = "none"
    document.getElementById("next").style.display = "block"
    

}

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

    var aEls = document.getElementsByTagName("a");
    console.log(aEls)
    for (var i = 0; i < aEls.length; i++){
    aEls[i].style.color = "white";
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
    
    var aEls = document.getElementsByTagName("a");
    console.log(aEls)
    for (var i = 0; i < aEls.length; i++){
    aEls[i].style.color = "black";
    }
}