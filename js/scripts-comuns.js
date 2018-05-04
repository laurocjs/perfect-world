document.querySelector("#menu-toggle").addEventListener('click', (event => {
  let menu = document.querySelector("#menu-itens");
  menu.classList.toggle('aberto');

  let monstro = document.querySelector("#monster");
  monstro.classList.toggle('eating');
}));

// Numero de visitas
let numeroDeVisitas = localStorage.getItem('NUMERO_VISITAS');
if (!numeroDeVisitas) {
  localStorage.setItem('NUMERO_VISITAS', 1);
}
localStorage.setItem('NUMERO_VISITAS', parseInt(localStorage.getItem('NUMERO_VISITAS')) +1);
alert(localStorage.getItem('NUMERO_VISITAS'));

// Audio
let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';
let audioNovo = 'https://ia800801.us.archive.org/11/items/TheImperialMarch/The-Imperial-March.mp3';

let audioATocar = localStorage.getItem('AUDIO_LOCAL');
if (!audioATocar)
  audioATocar = audioExemplo;

let audio = new Audio(audioATocar);
audio.play();

function criaAudio() {
  audioATocar = audioNovo;
  audio.pause();
  audio = new Audio(audioATocar);
  audio.play();
  localStorage.setItem('AUDIO_LOCAL', audioATocar);

}

let botaoDefinirAudio = document.querySelector("#definir-audio");
botaoDefinirAudio.addEventListener('click', criaAudio);