document.querySelector("#home").addEventListener('click', () => {
  window.location.href = "/";
});

// Personagem parado
let person = document.querySelector("#person");
let personIntType = person.dataset.character;
let personType;

if (!personIntType || personIntType == 1)
  personType = "pato";
if (intType == 2)
  personType = "coelho";

person.classList.add(personType + '-parado');


// Fundo da página
let backgroundClass = ['sky', 'stars', 'clouds', 'rain'];
let sky = document.querySelector("#sky");
let activeBackground = sky.dataset.item;

let updateBackground = () => {
  sky.classList.add(backgroundClass[activeBackground]);
}
updateBackground();

// Chão
let groundClass = ['ground1', 'ground2'];
let ground = document.querySelector("#earth");
let activeGround = ground.dataset.item;

let updateGround = () => {
  ground.classList.add(groundClass[activeGround]);
}
updateGround();