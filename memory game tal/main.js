function DoubleAndShuffle(singleCardDeck) {
    let doubledCardDeck = singleCardDeck.concat(singleCardDeck)
    let currentIndex = doubledCardDeck.length
    let randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [doubledCardDeck[currentIndex], doubledCardDeck[randomIndex]] = [doubledCardDeck[randomIndex], doubledCardDeck[currentIndex]]
    }
    console.log(doubledCardDeck);
    return doubledCardDeck
}

function checkEqual(value1, value2) {
    return value1 === value2
}


let singleCardDeck = ["🐱‍👤", "🥶", "👺", "👻", "💀",]
console.log(singleCardDeck);



const onClick = (e) => {
    console.log(e);

    e.target.innerText = e.target.value;
    e.target.classList.add("flip")
    array.push(e.target)
    counter++
    if (counter == 2) {
        if (array[0].value !== array[1].value) {

        } else {

        }
    }
}
let array = []
let counter = 0
function init() {
    const shuffledDeck = DoubleAndShuffle(singleCardDeck)
    const CardsBoard = document.getElementsByClassName("cards-container")[0]

    shuffledDeck.forEach(cardValue => {
        const cardElement = document.createElement("div")
        CardsBoard.appendChild(cardElement)
        cardElement.className = "card";
        cardElement.value = cardValue;
        cardElement.onclick = onClick
    });



}
init()

// let stars = '*'.repeat(shuffledDeck.length).split('')
// console.log(stars);
// while (!checkEqual(shuffledDeck.toString(), stars.toString())) {


//     let firstUserChoice = getUserChoiceIndex()
//     stars[firstUserChoice] = shuffledDeck[firstUserChoice]
//     alert(stars)
//     let secondUserChoice = getUserChoiceIndex()
//     stars[secondUserChoice] = shuffledDeck[secondUserChoice]
//     alert(stars)
//     let isEqual = checkEqual(
//         shuffledDeck[firstUserChoice],
//         shuffledDeck[secondUserChoice]
//     )
//     if (!isEqual) {
//         stars[firstUserChoice] = '*'
//         stars[secondUserChoice] = '*'
//     } else
//         console.log(stars);
// }