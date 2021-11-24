window.addEventListener("scroll", function (e) {
  if (window.scrollY < 400) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

// Potter section

const potterImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG",
  "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
];
const characters = document.querySelector(".characters");
const characterImage = document.createElement("img");
const p = document.createElement("p");
p.textContent = "Hej";
p.textContent = "Hej";

potterImages.forEach((potterImage) => {
  const characterImage = document.createElement("img");
  // characterImage.classList('character');
  characterImage.src = potterImage;
  console.log(potterImage);
});

// const charachters = document.querySelector('.characters')
// const checkOne = document.querySelector('.check-one');
// checkOne.addEventListener('click', () => {
//   charachters.classList.add('hidden');
// })
