// When the user scrolls down, show the navbar, otherwise hide the navbar
var prevScrollpos = 200;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.background = "RGB(12, 16, 32, 0)";
    }
    else {
        document.getElementById("navbar").style.background = "RGB(12, 16, 32, 0.85)";
    }
}

