const mainArray = [
    "card1.jpg",
    "card2.jpg",
    "card3.jpg",
    "card4.jpg",
    "card5.jpg"
];

const closedCards = [
    "back+design.jpg"
];

const openCards = mainArray.concat(mainArray);


function shuffle(arrayForShuffling) {
    let temp;
    for (let i = 0; i < arrayForShuffling.length * 2; i++) {
        let random1 = Math.floor(Math.random() * arrayForShuffling.length);
        let random2 = Math.floor(Math.random() * arrayForShuffling.length);
        temp = arrayForShuffling[random1];
        arrayForShuffling[random1] = arrayForShuffling[random2];
        arrayForShuffling[random2] = temp;
    }
    return arrayForShuffling;
}

function init() {
    const arrayAfterShuffling = shuffle(openCards);

    const boardElement = document.getElementById("board");

    arrayAfterShuffling.forEach((imageUrl) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.style.backgroundImage = `url(${closedCards[0]})`;
        cardElement.setAttribute("data-image", imageUrl);
        cardElement.onclick = handleCardClick;
        boardElement.appendChild(cardElement);
    });

    let firstCardClicked = null;
    let isComparing = false;

    function handleCardClick(e) {
        if (isComparing) return;
        const clickedCard = e.target;

        if (!firstCardClicked) {
            firstCardClicked = clickedCard;
            clickedCard.style.backgroundImage = `url(${clickedCard.getAttribute("data-image")})`;
        } else {
            if (firstCardClicked === clickedCard) {
                return;
            }
            clickedCard.style.backgroundImage = `url(${clickedCard.getAttribute("data-image")})`;
            const firstImageUrl = firstCardClicked.getAttribute("data-image");
            const secondImageUrl = clickedCard.getAttribute("data-image");

            isComparing = true;

            if (firstImageUrl === secondImageUrl) {

                firstCardClicked.removeEventListener("click", handleCardClick);
                clickedCard.removeEventListener("click", handleCardClick);
                isComparing = false;
                firstCardClicked = null;

            } else {

                setTimeout(() => {
                    firstCardClicked.style.backgroundImage = `url(${closedCards[0]})`;
                    clickedCard.style.backgroundImage = `url(${closedCards[0]})`;
                    isComparing = false;
                    firstCardClicked = null;
                }, 1000);
            }

        }
    }

}

document.addEventListener("DOMContentLoaded", init);

