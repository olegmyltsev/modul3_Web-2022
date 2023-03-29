
function showDescription(element){
    element.closest(".catalog__card-content").getElementsByClassName("catalog__card-detailed")[0].classList.add("catalog__card-detailed-active")
}
function removeDescription(element){
    element.closest(".catalog__card-detailed").classList.remove("catalog__card-detailed-active")
}

