

document.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 700 && window.pageYOffset < 6500 ) {
        document.getElementById("pageUp").style.opacity = "1"
    } else {
        document.getElementById("pageUp").style.opacity = "0"
    }
    console.log(event);
})

new WOW().init();