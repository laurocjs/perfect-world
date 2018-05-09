// Modal
let modal = document.querySelector("#modal");
let backdrop = document.querySelector(".backdrop");
let botaoFecharModal = document.querySelector(".fechar-modal");

// Elementos do modal
let tituloModal = document.querySelector(".conteudo-modal .titulo p");
let descricaoModal = document.querySelector(".conteudo-modal .descricao p");
let imagemModal = document.querySelector(".conteudo-modal .imagem img");
let botaoAvancar = document.querySelector(".conteudo-modal .imagem #botao-avancar");
let botaoVoltar = document.querySelector(".conteudo-modal .imagem #botao-voltar");

let titulo = document.querySelector("#titulo");
let descricao = document.querySelector("#descricao");
let sky = document.querySelector("#sky");


// Duendes auxiliares
let contador = 0;
let arrayImagens = [];

function abrirModal() {
  modal.style.display = 'block';
}

function fecharModal() {
  modal.style.display = 'none';
}

function setGaleriaModal(titulo, descricao, imagens) {
  tituloModal.textContent = titulo;
  descricaoModal.textContent = descricao;
  imagemModal.setAttribute('src', imagens[0]);
  contador = 0;
  arrayImagens = imagens;
}

let trocaImagem = (valor) => {
  let posicao = contador + valor;
  posicao = (posicao + arrayImagens.length) % arrayImagens.length;
  contador++;
  let enderecoDaImagem = arrayImagens[posicao];
  imagemModal.setAttribute('src', enderecoDaImagem);
};

// Bind eventos
let monstroClick = document.querySelector("#monster");
monstroClick.addEventListener('click', abrirModal);
backdrop.addEventListener('click', fecharModal);
botaoFecharModal.addEventListener('click', fecharModal);

botaoVoltar.addEventListener('click', () => trocaImagem(-1));
botaoAvancar.addEventListener('click', () => trocaImagem(1));

document.querySelector("#evento-galeria").addEventListener('click', () => {

  titulo.textContent = document.querySelector(".valor-titulo").value;
  descricao.textContent = document.querySelector(".valor-desc").value;;
  console.log(titulo, desc);

});

document.querySelector("#evento-cor").addEventListener('click', () => {

  let cor1 = document.querySelector("#corCeu1").value;
  let cor2 = document.querySelector("#corCeu2").value;

  document.querySelector("#tituloCor").classList.toggle("invisible");
  document.querySelector("#optionsCor").classList.toggle("invisible");

  //cor.background-image = "linear-gradient(to bottom,"+cor1+","+cor2+")";
  console.log(cor1, cor2);

});

document.querySelector("#articleCor").addEventListener('click', () => {
  document.querySelector("#tituloCor").classList.toggle("invisible");
  document.querySelector("#optionsCor").classList.toggle("invisible");
}); 

document.querySelector("#galeria").addEventListener('click', () => {
  document.querySelector("#tituloGaleria").classList.toggle("invisible");
  document.querySelector("#optionsGaleria").classList.toggle("invisible");
}); 

