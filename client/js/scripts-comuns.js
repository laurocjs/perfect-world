//Edição da Caixa de texto
var titulo = document.querySelector("#titulo");
var descricao = document.querySelector("#descricao");
var tituloTexto = document.querySelector("#tituloTexto");
var optionsTexto = document.querySelector("#optionsTexto");

document.querySelector('#menu .item#texto').addEventListener('click', () => {
  document.querySelector('#menu .item#texto>#optionsTexto').classList.toggle('exibir');
});

document.querySelector('#menu .item#texto>#optionsTexto').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector("#evento-texto").addEventListener('click', () => {
  titulo.textContent = document.querySelector(".valor-titulo").value;
  descricao.textContent = document.querySelector(".valor-desc").value;
});

//Edição do Fundo da página
let backgroundClass = ['sky', 'stars', 'clouds', 'rain'];
let sky = document.querySelector("#sky");
let backgroundButton = document.querySelector("#background-button");
let activeBackground = backgroundButton.dataset.item;

let updateBackground = () => {
  sky.classList.add(backgroundClass[activeBackground]);
  backgroundButton.classList.add(backgroundClass[activeBackground]);
}
let incrementBackground = () => {
  sky.classList.remove(backgroundClass[activeBackground]);
  backgroundButton.classList.remove(backgroundClass[activeBackground]);
  activeBackground = (activeBackground + 1) % backgroundClass.length;
  updateBackground();
}

updateBackground();

backgroundButton.addEventListener('click', () => {
  incrementBackground();
});

//Edição do Chão
let groundClass = ['ground1', 'ground2'];
let ground = document.querySelector("#earth");
let groundButton = document.querySelector("#ground-button");
let activeGround = groundButton.dataset.item;

let updateGround = () => {
  ground.classList.add(groundClass[activeGround]);
  groundButton.classList.add(groundClass[activeGround]);
}
let incrementGround = () => {
  ground.classList.remove(groundClass[activeGround]);
  groundButton.classList.remove(groundClass[activeGround]);
  activeGround = (activeGround + 1) % groundClass.length;
  updateGround();
}

updateGround();

groundButton.addEventListener('click', () => {
  incrementGround();
});

//Adição de audio
// let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';

// document.querySelector("#evento-musica").addEventListener('click', () => {
//   let url = document.querySelector("#url-musica").value;
//   document.querySelector("#music").setAttribute('src', url);
// });
