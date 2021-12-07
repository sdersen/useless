const characterList = document.querySelector('.character-list');
const checkTwenty = document.querySelector('.check-twenty');

checkTwenty.addEventListener('click', () => {
  characterList.classList.toggle('gone');

  fetch('https://hp-api.herokuapp.com/api/characters')
    .then((response) => {
      return response.json();
    })
    .then((characters) => {
      characters.forEach((character) => {
        const fullName = document.createElement('p');
        fullName.textContent = character.name;
        characterList.appendChild(fullName);
        // { once: true };
      });

      const avadaKedavraBtn = document.createElement('button');
      avadaKedavraBtn.textContent = 'Avada Kedavra';
      avadaKedavraBtn.classList.add('avada-kedavra-btn');
      characterList.appendChild(avadaKedavraBtn);
      const body = document.querySelector('body');

      avadaKedavraBtn.addEventListener('click', () => {
        body.classList.add('gone');
      });
    });
});
