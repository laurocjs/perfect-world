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
localStorage.setItem('NUMERO_VISITAS', parseInt(localStorage.getItem('NUMERO_VISITAS')) + 1);
document.querySelector("#visits_counter").innerHTML = localStorage.getItem('NUMERO_VISITAS');

// Audio
let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';

let audioATocar = localStorage.getItem('AUDIO_LOCAL');
let audio = new Audio();
if (audioATocar) {
  audio = new Audio(audioATocar);
  audio.play();
}

function criaAudio(novoAudio) {
  audio.pause();
  audio = new Audio(novoAudio);
  audio.play();
  localStorage.setItem('AUDIO_LOCAL', novoAudio);

}

document.querySelector("#evento-musica").addEventListener("blur", (e) => {
  criaAudio(e.currentTarget.value);
});

let botaoVisitas = document.querySelector("#contador-de-visitas");
botaoVisitas.addEventListener('click', () => {
  alert(localStorage.getItem('NUMERO_VISITAS'));
});

