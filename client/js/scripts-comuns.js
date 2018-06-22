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

//Edição da Caixa de texto
var titulo = document.querySelector("#titulo");
var descricao = document.querySelector("#descricao");
var tituloTexto = document.querySelector("#tituloTexto");
var optionsTexto = document.querySelector("#optionsTexto");
var activeText = false;

document.querySelector("#evento-texto").addEventListener('click', () => {
  tituloTexto.classList.remove("invisible");
  optionsTexto.classList.add("invisible");

  titulo.textContent = document.querySelector(".valor-titulo").value;
  descricao.textContent = document.querySelector(".valor-desc").value;
  activeText = false;
});

document.querySelector("#texto").addEventListener('click', () => {
  if (!activeText){
    tituloTexto.classList.toggle("invisible");
    optionsTexto.classList.toggle("invisible");
    activeText = true;
  }  
});

//Edição do Fundo da página
var sky = document.querySelector("#sky");

document.querySelector("#rain").addEventListener('click', () => {
    sky.classList.remove("moon");
    sky.classList.remove("stars");
    sky.classList.remove("cloud");
    sky.classList.add("rain");
});

document.querySelector("#moon").addEventListener('click', () => {
    sky.classList.remove("rain");
    sky.classList.remove("stars");
    sky.classList.remove("cloud");
    sky.classList.add("moon");
});

document.querySelector("#stars").addEventListener('click', () => {  
    sky.classList.remove("moon");
    sky.classList.remove("rain");
    sky.classList.remove("cloud");
    sky.classList.add("stars");
});

document.querySelector("#cloud").addEventListener('click', () => {
    sky.classList.remove("moon");
    sky.classList.remove("stars");
    sky.classList.remove("rain");
    sky.classList.add("cloud");
});

//Edição do Chão
var earth = document.querySelector("#earth");

document.querySelector("#ground1").addEventListener('click', () => {
    earth.classList.remove("ground-2");
    earth.classList.add("ground-1");
});

document.querySelector("#ground2").addEventListener('click', () => {
    earth.classList.remove("ground-1");
    earth.classList.add("ground-2");
});

//Adição de audio
let audioExemplo = 'https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3';

document.querySelector("#evento-musica").addEventListener('click', () => {
  let url = document.querySelector("#url-musica").value;
  document.querySelector("#music").setAttribute( 'src', url );
});