const cardArray = [
    {
        name: "donut",
        img: "images/donut.png",
    },
    {
        name: "cake",
        img: "images/cake.png",
    },
    {
        name: "cookie",
        img: "images/cookie.png",
    },
    {
        name: "cupcake",
        img: "images/cupcake.png",
    },
    {
        name: "burgerandfries",
        img: "images/burgerandfries.png",
    },
    {
        name: "chocolate-bar",
        img: "images/chocolate-bar.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream-2.png",
    },
    {
        name: "donut",
        img: "images/donut.png",
    },
    {
        name: "cake",
        img: "images/cake.png",
    },
    {
        name: "cookie",
        img: "images/cookie.png",
    },
    {
        name: "cupcake",
        img: "images/cupcake.png",
    },
    {
        name: "burgerandfries",
        img: "images/burgerandfries.png",
    },
    {
        name: "chocolate-bar",
        img: "images/chocolate-bar.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream-2.png",
    },
];

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

console.log(gridDisplay);

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/hungry4.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log("Check for a match!");
    if (optionOneId == optionTwoId) {
        alert("I'm hungry! Stop messing around!");
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!!!");

        cards[optionOneId].setAttribute("src", "images/cherries2.png");
        cards[optionTwoId].setAttribute("src", "images/cherries2.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);

        // CARD SHINE EFFECT
        cardsChosenIds.forEach((id) => {
            const card = cards[id];
            const cardParent = card.parentElement;
            const shineEffectDiv = document.createElement("div");
            shineEffectDiv.classList.add("card-with-shine");

            const shineElement = document.createElement("div");
            shineElement.classList.add("shine");

            cardParent.insertBefore(shineEffectDiv, card);
            shineEffectDiv.appendChild(card);
            shineEffectDiv.appendChild(shineElement);

            setTimeout(() => {
                shineEffectDiv.classList.add("add-shine");
            }, 100);
        });
    }
    cardsChosen = [];
    cardsChosenIds = [];
}

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    // Check if the same card was clicked twice
    if (optionOneId == optionTwoId) {
        alert("I'm hungry! Stop messing around!!");
        cards[optionOneId].setAttribute("src", "images/hungry4.png");
    } else if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute("src", "images/cherries2.png");
        cards[optionTwoId].setAttribute("src", "images/cherries2.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
        // CARD SHINE EFFECT
        cardsChosenIds.forEach((id) => {
            const card = cards[id];
            const cardParent = card.parentElement;
            const shineEffectDiv = document.createElement("div");
            shineEffectDiv.classList.add("card-with-shine");

            const shineElement = document.createElement("div");
            shineElement.classList.add("shine");

            cardParent.insertBefore(shineEffectDiv, card);
            shineEffectDiv.appendChild(card);
            shineEffectDiv.appendChild(shineElement);

            setTimeout(() => {
                shineEffectDiv.classList.add("add-shine");
            }, 100);
        });
    } else {
        // No match
        cards[optionOneId].setAttribute("src", "images/hungry4.png");
        cards[optionTwoId].setAttribute("src", "images/hungry4.png");
    }
    if (cardsWon.length === cardArray.length / 2) {
        setTimeout(() => {
            alert("You won! Congratulations!");
            resetGame();
        }, 650);
    }
    // Reset cardsChosen and cardsChosenIds for the next turn
    cardsChosen = [];
    cardsChosenIds = [];
}

function flipCard() {
    console.log(cardArray);
    let cardId = this.getAttribute("data-id");
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 650);
    }
}

function resetGame() {
    // Reset the cardsWon array
    cardsWon.length = 0;

    // Remove all the cards from the grid
    const cards = document.querySelectorAll("img");
    cards.forEach((card) => card.remove());
    document.getElementById("grid").innerHTML = "";
    createBoard();
}
