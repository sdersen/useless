//SCROLL
window.addEventListener('scroll', (e) => {
  if (window.scrollY > 700) {
    document.body.style.backgroundColor = 'var(--timber-grey)';
  }
  if (window.scrollY > 7000) {
    document.body.style.backgroundColor = 'var(--timber-darker)';
  }
  if (window.scrollY > 13000) {
    document.body.style.backgroundColor = 'var(--timber-dark)';
  }
});

//FOCUS
const spellInfo = document.querySelector('.name');
const sepellInput = document.querySelector('.text-input');
sepellInput.addEventListener('focus', (e) => {
  spellInfo.textContent =
    'Ok, you are a beginner... Engorgio, Wingardium Leviosa and Fidelius is all you can master. And if you feel like a muggle you can check the boxes..';
});

//SPELL
// Input field
const nameInput = document.querySelector('.text-input');
//Btn
const subButton = document.querySelector('.submit-btn');

subButton.addEventListener('click', (e) => {
  const spell = nameInput.value;

  if (spell == 'Engorgio') {
    engorgio();
    yourName.textContent = nameInput.value;
    removeSpell(yourName);
  }
  if (spell == 'Wingardium Leviosa') {
    Wingardium();
    yourName.textContent = nameInput.value;
    removeSpell(yourName);
  }
  if (spell == 'Fidelius') {
    fidelius();
    yourName.textContent = nameInput.value;
    removeSpell(yourName);
  }
});

function removeSpell(spellName) {
  setTimeout(() => {
    spellName.classList.add('hidden');
  }, 3000);
}
//REMOVE FUNCTION
function removeCharacterElement(elementOne, elementTwo) {
  setTimeout(() => {
    elementOne.classList.add('gone');
    elementTwo.classList.add('gone');
  }, 5000);
}

function removeCardElement(elementOne) {
  setTimeout(() => {
    elementOne.classList.add('gone');
  }, 3000);
}

// CHARACTER IMAGES
const checkOne = document.querySelector('.check-one');
const btnContainer = document.querySelector('.btn-container');

const potterImages = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg',
    alt: 'Hermoine Granger',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
    alt: 'Ron Weasley',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg',
    alt: 'Harry Potter',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG',
    alt: 'Professon Dumbeldore',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg',
    alt: 'Hagrid',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg',
    alt: 'Hagrid',
  },
];

const characters = document.querySelector('.characters');

function potterHeads() {
  potterImages.forEach((potterImage) => {
    const img = document.createElement('img');
    img.src = potterImage.url;
    img.alt = potterImage.alt;
    img.classList.add('character');
    characters.appendChild(img);
  });

  const button = document.createElement('button');
  button.textContent = 'Ok go away...';
  btnContainer.appendChild(button);

  button.addEventListener('click', () => {
    characters.classList.add('gone');
    button.classList.add('gone');
  });
}

checkOne.addEventListener(
  'click',
  () => {
    potterHeads();
    removeCharacterElement(characters, btnContainer);
  },
  { once: true }
);

//CONFETTI
const checkTwo = document.querySelector('.check-two');
const confetti = document.querySelector('.confetti-container');

checkTwo.addEventListener('click', () => {
  confetti.classList.toggle('hidden');
});

//DISSAPERING BOXES / Fidelius
const checkThree = document.querySelectorAll('.check-three');
checkThree.forEach((check) => {
  check.addEventListener('click', () => {
    check.classList.add('hidden');
  });
});

function fidelius() {
  checkThree.forEach((check) => {
    check.classList.add('hidden');
  });
}

// QUOTES
const cardContainer = document.querySelector('.quote-container');
const card = document.querySelector('.quote-card');
const quote = document.querySelector('.quote');
const checkFours = document.querySelectorAll('.check-four');
const closeBtn = document.querySelector('.closeBtn');

const quotes = [
  '"I assure you that if you die, you need not hand your homework in."',
  '"Just because you have the emotional range of a teaspoon doesn’t mean we all have."',
  '"We could all have been killed—or worse, expelled"',
  '"It does not do to dwell on dreams and forget to live."',
  '"We must all face the choice between what is right, and what is easy."',
];

function randomQuote(quote) {
  return quote[Math.floor(Math.random() * quote.length)];
}

function createCard() {
  card.classList.remove('gone');
  cardContainer.classList.remove('gone');
  quote.textContent = randomQuote(quotes);
  closeBtn.classList.remove('gone');

  closeBtn.addEventListener('click', () => {
    card.classList.add('gone');
  });
}

checkFours.forEach((checkFour) => {
  checkFour.addEventListener('click', () => {
    createCard();
    removeCardElement(cardContainer);
  });
});

// FLYING BOXES/Wingardium
const checkNineteen = document.querySelectorAll('.check-nineteen');
const vingardium = document.querySelector('.vingardium');

checkNineteen.forEach((check) => {
  check.addEventListener('click', () => {
    Wingardium();
    vingardium.classList.remove('gone');
    removeSpell(vingardium);
  });
});

function Wingardium() {
  checkNineteen.forEach((check) => {
    check.classList.add('fly-away');
  });
}

// Engorgio box
const checkFive = document.querySelector('.engorgio');
const engorgioText = document.querySelector('.Engorgio-text');

function engorgio() {
  checkFive.classList.toggle('check-five');
}

checkFive.addEventListener('click', () => {
  engorgio();
  engorgioText.classList.toggle('gone');
  removeSpell(engorgioText);
});
