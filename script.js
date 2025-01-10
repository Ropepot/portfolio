// navigation bar function
function myMenuFunction(){
    var menubtn = document.getElementById("myNavMenu");

    if(menubtn.className === "nav-menu"){
        menubtn.className += " responsive";
    } else {
        menubtn.className = "nav-menu";
    }
}

// add shadow onscroll
window.onscroll = function() {headersShadow()};

function headersShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px"
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px"
    }
}