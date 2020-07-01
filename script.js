const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("cards-container");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// Kepp track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
  {
    question: "Par quoi commence une varible ?",
    answer: "Une lettre, $ ou _",
  },
  {
    question: "Qu'est ce qu'une variable ?",
    answer: "Container for a piece of data",
  },
  {
    question: "Exemple of Case Sensitive Variable",
    answer: "thisIsAVariable",
  },
];

// Create all cards

function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create single card in DOM

function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
  <div class="inner-card">
        <div class="inner-card-front">
            <p>
                ${data.question}
            </p>
        </div>
        <div class="inner-card-back">
            <p>
                ${data.answer}
            </p>
        </div>
    </div>
  `;

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);
}

createCards();
