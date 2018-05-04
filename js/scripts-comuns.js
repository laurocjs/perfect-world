document.querySelector("#menu-toggle").addEventListener('click', (event => {
  let menu = document.querySelector("#menu-itens");
  menu.classList.toggle('aberto');

  let monstro = document.querySelector("#monster");
  monstro.classList.toggle('eating');
}));

// Numero de visitas
let numeroDeVisitas = localStorage.getItem('NUMERO_VISITAS');
if (!numeroDeVisitas) {
  localStorage.setItem('NUMERO_VISITAS', +0);
}
localStorage.setItem('NUMERO_VISITAS', localStorage.getItem('NUMERO_VISITAS') + +1);
alert(localStorage.getItem('NUMERO_VISITAS'));

// Audio
let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';
let audio = new Audio(audioExemplo);
function criaAudio() {
  audio.pause();
  audio = new Audio(audioExemplo);
  audio.play();
}

let botaoDefinirAudio = document.querySelector("#definir-audio");
botaoDefinirAudio.addEventListener('click', criaAudio);