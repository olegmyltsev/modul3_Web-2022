const getCarouselContent = document.getElementsByClassName("carousel__content")
const active = "carousel__content-active";
const right = "carousel__content-right";
const left = "carousel__content-left";
let slide = 0
let slideRight;
let slideLeft;
const getCarousel = document.getElementById("carousel")
function moveSlide(direction) {
    document.getElementById("carousel").style.pointerEvents = "none"
    setTimeout(function () { document.getElementById("carousel").style.pointerEvents = "auto" }, 500)
    if (direction == "right") {
        slide++
        if (slide == 3) { slide = 0 }
        slideRight = slide + 1
        slideLeft = slide - 1
        if (slideRight > 2) { slideRight = 0 }
        if (slideLeft < 0) { slideLeft = 2 }
        getCarouselContent[slide].style.opacity = 1
        getCarouselContent[slide].style.transition = "all 1000ms"
        getCarouselContent[slideLeft].style.opacity = 1
        getCarouselContent[slideLeft].style.transition = "all 1000ms"
        getCarouselContent[slideRight].style.opacity = 0
        getCarouselContent[slideRight].style.transition = "none"
    } else {
        slide--
        if (slide < 0) { slide = 2 }
        slideRight = slide + 1
        slideLeft = slide - 1
        if (slideRight > 2) { slideRight = 0 }
        if (slideLeft < 0) { slideLeft = 2 }
        getCarouselContent[slide].style.opacity = 1
        getCarouselContent[slide].style.transition = "all 1000ms"
        getCarouselContent[slideLeft].style.opacity = 0
        getCarouselContent[slideLeft].style.transition = "none"
        getCarouselContent[slideRight].style.opacity = 1
        getCarouselContent[slideRight].style.transition = "all 1000ms"
    }


    getCarouselContent[slide].classList.add(active)
    getCarouselContent[slide].classList.remove(right, left)

    getCarouselContent[slideRight].classList.add(right)
    getCarouselContent[slideRight].classList.remove(active, left)

    getCarouselContent[slideLeft].classList.add(left)
    getCarouselContent[slideLeft].classList.remove(right, active)
}


let touchStart
let touchEnd
getCarousel.addEventListener("touchstart", function (event) {
    touchStart = Math.floor(event.touches[0].clientX)
    console.log(touchStart);
})
getCarousel.addEventListener("touchend", function (event) {
    touchEnd = Math.floor(event.changedTouches[0].clientX)
    console.log(touchEnd);
    if (touchEnd - touchStart > 100) {
        moveSlide('left')
    }
    if (touchEnd - touchStart < -100) {
        moveSlide('right')
    }
})

