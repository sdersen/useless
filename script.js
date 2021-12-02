window.addEventListener('scroll', function (e) {
  if (window.scrollY < 600) {
    document.body.style.backgroundColor = 'var(--timber-grey)';
  } else {
    document.body.style.backgroundColor = 'var(--darker-pink)';
  }
});

//Name

const nameInput = document.querySelector('.text-input');
const yourName = document.querySelector('.name');

nameInput.addEventListener('keyup', (e) => {
  yourName.textContent = `Okey ${e.target.value} let´s play!`;
});

// Potter section
const checkOne = document.querySelector('.check-one');
const btnContainer = document.querySelector('.btn-container');

checkOne.addEventListener(
  'click',
  () => {
    potterHeads();
  },
  { once: true }
);

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
];

const characters = document.querySelector('.characters');

function potterHeads() {
  potterImages.forEach((potterImage) => {
    console.log(potterImage);
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
    characters.classList.add('hidden');
    button.classList.add('hidden');
  });
}

//CONFETTI

const checkTwo = document.querySelector('.check-two');
const confetti = document.querySelector('.confetti-container');

checkTwo.addEventListener('click', () => {
  confetti.classList.toggle('hidden');
});

//HIDDEN BOXES
const checkThree = document.querySelectorAll('.check-three');

checkThree.forEach((check) => {
  check.addEventListener('click', () => {
    check.classList.add('hidden');
  });
});

// QUOTES
const card = document.querySelector('.quote-card');
const quote = document.querySelector('.quote');

const quotes = [
  'I assure you that if you die, you need not hand your homework in.',
  'Just because you have the emotional range of a teaspoon doesn’t mean we all have.',
  'We could all have been killed—or worse, expelled',
  'It does not do to dwell on dreams and forget to live.',
  'We must all face the choice between what is right, and what is easy.',
];

function randomQuote(quote) {
  return quote[Math.floor(Math.random() * quote.length)];
}

function createCard() {
  card.classList.remove('hidden');
  quote.textContent = randomQuote(quotes);

  const button = document.createElement('button');
  button.textContent = 'Close';
  card.appendChild(button);

  button.addEventListener('click', () => {
    card.classList.add('hidden');
    // button.remove();
  });
}

const checkFour = document.querySelector('.check-four');
const checkFive = document.querySelector('.check-five');

checkFour.addEventListener(
  'click',
  () => {
    createCard();
  },
  { once: true }
);
checkFive.addEventListener(
  'click',
  () => {
    createCard();
  },
  { once: true }
);
