const getConsultationButtons = document.querySelectorAll("[data-modal='consultation']")
const getOverlay = document.getElementById("overlay")
const getConsultationModal = document.getElementById("consultation")
const getCloseModal = document.querySelectorAll("[data-close]")
const getAllModal = document.getElementsByClassName("modal")
const getOrderModal = document.getElementById("order")
const getOrderButtons = document.querySelectorAll("[data-modal='order']")
const getThanksModal = document.getElementById("thanks")

for (let consultationButtonsCount = 0; consultationButtonsCount < getConsultationButtons.length; consultationButtonsCount++) {
    getConsultationButtons[consultationButtonsCount].addEventListener("click", function(){
        getOverlay.style.display="block"
        getConsultationModal.style.display="block"
    })
    
}

for (let hideButtonsCount = 0; hideButtonsCount < getCloseModal.length; hideButtonsCount++) {
    getCloseModal[hideButtonsCount].addEventListener("click", function(){
        getOverlay.style.display="none"
        getAllModal[0].style.display="none"
        getAllModal[1].style.display="none"
        getAllModal[2].style.display="none"

    })    
}

for (let orderButtonsCount = 0; orderButtonsCount < getOrderButtons.length; orderButtonsCount++) {
    getOrderButtons[orderButtonsCount].addEventListener("click", function(){
        getOverlay.style.display="block"
        getOrderModal.style.display="block"
    })
    
}

function thanks(){
    getAllModal[0].style.display="none"
    getAllModal[1].style.display="none"
    getOverlay.style.display="block"
    getThanksModal.style.display="block"
}

console.log(document.getElementsByClassName("form")[1]);