// Salvar
let botaoSalvar = document.querySelector("#salvar");
let user = {};
botaoSalvar.addEventListener('click', () => {
  user.user = botaoSalvar.dataset.item;
  let spriteCharacter = document.querySelector('#player').dataset.character;
  if (spriteCharacter == "pato" || spriteCharacter == "")
    user.character = 1;
  if (spriteCharacter == "coelho")
    user.character = 2;
  // user.character = 2;
  $.ajax({
    url: "/preferences",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(user),
    contentType: "application/json",
    cache: false,
    timeout: 5000,
    complete: function () {
      //called when complete
      console.log('process complete');
    },
    success: function (data) {
      console.log(data);
      console.log('process sucess');
    },
    error: function (data, status) {
      console.log('process error');
    },
  });

});


//Edição da Caixa de texto
let titulo = document.querySelector("#titulo");
let descricao = document.querySelector("#descricao");
let tituloTexto = document.querySelector("#tituloTexto");
let optionsTexto = document.querySelector("#optionsTexto");

document.querySelector('#menu .item#texto').addEventListener('click', () => {
  document.querySelector('#menu .item#texto>#optionsTexto').classList.toggle('exibir');
});

document.querySelector('#menu .item#texto>#optionsTexto').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector("#evento-texto").addEventListener('click', () => {
  let titulotext = document.querySelector(".valor-titulo").value;
  let subtitulo = document.querySelector(".valor-desc").value;
  titulo.textContent = titulotext;
  user.textbox_title = titulotext;
  descricao.textContent = subtitulo;
  user.textbox = subtitulo;
});

//Edição do Fundo da página
let backgroundClass = ['sky', 'stars', 'clouds', 'rain'];
let sky = document.querySelector("#sky");
let backgroundButton = document.querySelector("#background-button");
let activeBackground = backgroundButton.dataset.item;

let updateBackground = () => {
  sky.classList.add(backgroundClass[activeBackground]);
  backgroundButton.classList.add(backgroundClass[activeBackground]);
  user.sky = activeBackground;
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
  user.ground = activeGround;
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
