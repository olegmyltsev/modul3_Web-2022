const getTabs = document.getElementsByClassName("catalog__tab")
const getCards = document.getElementsByClassName("catalog__cards")
function tabChange(selectedTab){
    for (let index = 0; index < getTabs.length; index++) {
        getTabs[index].classList.remove("catalog__tab-active")        
    }
    selectedTab.classList.add("catalog__tab-active")
}
function cardsChange(selectedCards){
    for (let index = 0; index < getCards.length; index++) {
        getCards[index].classList.remove("catalog__cards-active")        
    }
    document.getElementsByClassName("catalog__cards-"+selectedCards)[0].classList.add("catalog__cards-active")
}