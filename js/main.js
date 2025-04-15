const cards = document.querySelectorAll(".card");
let flippedCard = false;
let lock = false;
let firstCard, secondCard;
shuffle()



function flipCard() {
    if(lock) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!flippedCard) {
      flippedCard = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    lock = true;
    checkPair();
   
}

function checkPair() {
   if (firstCard.dataset.card === secondCard.dataset.card) {
     pairCards();
     return;
   }
   unflipCards();
}

function pairCards() {
   firstCard.removeEventListener("click", flipCard);
   secondCard.removeEventListener("click", flipCard);
   reset()
}

function unflipCards() {
    let lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset()
    }, 1000);
}

function reset(){
    [flippedCard, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
    let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
}

cards.forEach(card => card.addEventListener('click', flipCard));