const characterList = document.querySelector('.character-list');
const checkTwenty = document.querySelector('.check-twenty');

fetch('http://hp-api.herokuapp.com/api/characters')
  .then((response) => {
    return response.json();
  })
  .then((characters) => {
    checkTwenty.addEventListener('click', () => {
      characterList.classList.toggle('hidden');
      characters.forEach((character) => {
        const fullName = document.createElement('p');
        fullName.textContent = character.name;
        characterList.appendChild(fullName);
      });
      const avadaKedavraBtn = document.createElement('button');
      avadaKedavraBtn.textContent = 'Avada Kedavra';
      avadaKedavraBtn.classList.add('avada-kedavra-btn');
      characterList.appendChild(avadaKedavraBtn);
    });
  });
