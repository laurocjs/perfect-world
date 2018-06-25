document.querySelector("#home").addEventListener('click', () => {
  window.location.href = "/";
});

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