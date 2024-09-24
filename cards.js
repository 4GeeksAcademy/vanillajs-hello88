const suits = ["hearts", "diamonds", "spades", "clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suitTop = document.querySelector("#symbolTop");
let number = document.querySelector("#number");
let suitBottom = document.querySelector("#symbolBottom");

function chooseCard(arr1, arr2){
    let card = [];
    card.push(arr1[Math.floor(Math.random() * arr1.length)]);
    card.push(arr2[Math.floor(Math.random() * arr2.length)]);
    return card;
}

function assignColor(card){
    if(card[0] === "hearts" || card[0] === "diamonds"){
        suitTop.style.color = "red";
        number.style.color = "red";
        suitBottom.style.color = "red";
    } else {
        suitTop.style.color = "black";
        number.style.color = "black";
        suitBottom.style.color = "black";
    }
}

function assignSuit(card){
    if(card[0] === "hearts"){
        suitTop.innerHTML = "♥";
        suitBottom.innerHTML = "♥";
    } else if(card[0] === "diamonds"){
        suitTop.innerHTML = "♦";
        suitBottom.innerHTML = "♦";
    } else if(card[0] === "clubs"){
        suitTop.innerHTML = "♣";
        suitBottom.innerHTML = "♣";
    } else {
        suitTop.innerHTML = "♠";
        suitBottom.innerHTML = "♠";
    }
}

function assignValue(card){
    number.innerHTML = card[1];
}

function generateCard(){
    let card = chooseCard(suits, values);
    assignColor(card);
    assignSuit(card);
    assignValue(card);
}

window.onload = function(){ generateCard(); }
document.querySelector(".button").addEventListener("click", generateCard);
