window.addEventListener("scroll", function (e) {
  if (window.scrollY < 600) {
    document.body.style.backgroundColor = "var(--pink)";
  } else {
    document.body.style.backgroundColor = "var(--darker-pink)";
  }
});

// Potter section
const checkOne = document.querySelector(".check-one");
const btnContainer = document.querySelector(".btn-container");

checkOne.addEventListener("click", () => {
  potterHeads();
});

const potterImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/f/fe/Dumbledore_and_Elder_Wand.JPG",
  "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
];
const characters = document.querySelector(".characters");

function potterHeads() {
  potterImages.forEach((potterImage) => {
    console.log(potterImage);
    const img = document.createElement("img");
    img.src = potterImage;
    img.classList.add("character");
    characters.appendChild(img);
  });
  const button = document.createElement("button");
  button.textContent = "Ok go away...";
  btnContainer.appendChild(button);

  button.addEventListener("click", () => {
    characters.classList.add("hidden");
    button.classList.add("hidden");
  });
}

//CONFETTI

const checkTwo = document.querySelector(".check-two");
const confetti = document.querySelector(".confetti-container");

checkTwo.addEventListener("click", () => {
  confetti.classList.toggle("hidden");
});
