document.getElementById("portfolioBtn").addEventListener("click", function() {
    window.open("https://www.brookebonynge.design/", "blank");
});

document.addEventListener("DOMContentLoaded", () => {
    let cardArray = [
        { name: "apple", img: "🍎" },
        { name: "apple", img: "🍎" },
        { name: "banana", img: "🍌" },
        { name: "banana", img: "🍌" },
        { name: "cherry", img: "🍒" },
        { name: "cherry", img: "🍒" },
        { name: "grape", img: "🍇" },
        { name: "grape", img: "🍇" },
        { name: "strawberry", img: "🍓" },  
        { name: "strawberry", img: "🍓" },  
        { name: "watermelon", img: "🍉" }, 
        { name: "watermelon", img: "🍉" },
        { name: "orange", img: "🍊" }, 
        { name: "orange", img: "🍊" },
        { name: "pear", img: "🍐" }, 
        { name: "pear", img: "🍐" },
        { name: "kiwi", img: "🥝" }, 
        { name: "kiwi", img: "🥝" }
    ];

    const gameBoard = document.getElementById("game-board");
    let selectedCards =[];
    let matchedCards = [];
   // let shuffleCards = [];

    function shuffleCards(){
        cardArray.sort(() => 0.5 - Math.random());
    }

    function createBoard(){
        gameBoard.innerHTML = "";
        shuffleCards();
        cardArray.forEach((item) => {

            const container = document.createElement('div');
            container.classList.add('card-container')

            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.name = item.name;

            const emoji = document.createElement("span");
            emoji.innerHTML = item.img;
            emoji.style.display = "none";
            card.appendChild(emoji);

            card.addEventListener("click", () => flipCard(card,emoji));

            container.appendChild(card);
            gameBoard.appendChild(container);
        });
    
    }

    function flipCard(card, emoji) {
        if (selectedCards.length < 2 && !card.classList.contains("flipped")){
            card.classList.add("flipped");
            emoji.style.display = "block";
            selectedCards.push({card, emoji});

            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 500);
                
            }
        }
    }

function checkMatch(){
    const [firstCard, secondCard] = selectedCards;
    console.log(firstCard, secondCard);

    if (firstCard.card.dataset.name === secondCard.card.dataset.name) {
        firstCard.card.classList.add("matched");
        secondCard.card.classList.add("matched");
        matchedCards.push(firstCard.card, secondCard.card);
    } else {
        firstCard.card.classList.remove("flipped");
        secondCard.card.classList.remove("flipped");
        firstCard.emoji.style.display = "none";
        secondCard.emoji.style.display = "none";
    }
    selectedCards = [];

    if (matchedCards.length === cardArray.length) {
        setTimeout(() => {
            document.getElementById("winPopup").style.display = "flex"; }, 500);
        
    }
}

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("winPopup").style.display = "none";
});

document.getElementById("playAgainBtn").addEventListener("click", function() {
    document.getElementById("winPopup").style.display = "none"; 
    restartGame(); 
});

document.getElementById("restartBtn").addEventListener("click", function() {
    restartGame();
});

function restartGame() {
    matchedCards = []; 
    selectedCards = []; 
    createBoard(); 
    
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.createElement("div");
    container.classList.add("card-container");
    document.body.appendChild(container);

    // Create the card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create front and back
    const front = document.createElement("div");
    front.classList.add("card-front");
    front.textContent = "Front";

    const back = document.createElement("div");
    back.classList.add("card-back");
    back.textContent = "Back";

    // Append front and back to card
    card.appendChild(front);
    card.appendChild(back);

    // Append card to container
    container.appendChild(card);

    // Add click event to flip the card
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});

createBoard();  
});