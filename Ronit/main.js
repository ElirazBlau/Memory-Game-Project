// יצירת מערך של קלפים
const values = ["A", "B", "C", "D", "E"];
let cards = values.concat(values);

// ערבוב הקלפים
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
cards = shuffle(cards);

cards.forEach((value) => { //לכל ערך במחרוזת יוצרים קלף
  let cardElement = document.createElement("div");
  cardElement.classList.add("card");
  
 //צד קדמי ואחורי של קלף
  let frontSide = document.createElement("div");//יצירת דיב לצד קדמי 
  frontSide.classList.add("front");
 frontSide.innerText = value;//הכנסת אות לצד קדמי

  let backSide = document.createElement("div");//יצירת דיב לצד אחורי
  backSide.classList.add("back");
// לקשר את הצדדים לכרטיס
cardElement.appendChild(frontSide);
cardElement.appendChild(backSide);

let boardElement = document.querySelector(".board");// לבחור את הלוח שעליו יהיו הקלפים
  boardElement.appendChild(cardElement);// לקשר את הכרטיס כילד בלוח

  //מה קורה כשלוחצים
  cardElement.onclick = () => {
    cardElement.classList.toggle("flipped");
  };
});