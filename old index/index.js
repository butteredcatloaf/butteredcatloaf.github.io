var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0px";
}
function hideMenu() {
    navLinks.style.right = "-210px";
}
function mobileDevice() {
    let mobile = false;
    if (/Android||webOS||iPhone||iPad||iPod||BlackBerry||IEMobile||Opera Mini/i.test(navigator.userAgent)) {
        return mobile = true;
    } else {
        return mobile;
    }
}

var loadTimer;

function loadScreen() {
  loadTimer = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

