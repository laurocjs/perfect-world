//Edição da Caixa de texto
var titulo = document.querySelector("#titulo");
var descricao = document.querySelector("#descricao");
var tituloTexto = document.querySelector("#tituloTexto");
var optionsTexto = document.querySelector("#optionsTexto");
var activeText = false;

// document.querySelector("#evento-texto").addEventListener('click', () => {
//   tituloTexto.classList.remove("invisible");
//   optionsTexto.classList.add("invisible");

//   titulo.textContent = document.querySelector(".valor-titulo").value;
//   descricao.textContent = document.querySelector(".valor-desc").value;
//   activeText = false;
// });

// document.querySelector("#texto").addEventListener('click', () => {
//   if (!activeText) {
//     tituloTexto.classList.toggle("invisible");
//     optionsTexto.classList.toggle("invisible");
//     activeText = true;
//   }
// });

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
let changeFloor = function (option) {
  var earth = document.querySelector("#earth");
  earth.classList.remove("ground-1");
  earth.classList.remove("ground-2");
  earth.classList.add(option);
}

// document.querySelector("#ground1").addEventListener('click', () => {
//   changeFloor('ground-1');
// });

// document.querySelector("#ground2").addEventListener('click', () => {
//   changeFloor('ground-2');

// });

//Adição de audio
// let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';

// document.querySelector("#evento-musica").addEventListener('click', () => {
//   let url = document.querySelector("#url-musica").value;
//   document.querySelector("#music").setAttribute('src', url);
// });
