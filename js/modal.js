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

//Edição da Caixa de texto
document.querySelector("#evento-texto").addEventListener('click', () => {
  document.querySelector("#tituloTexto").classList.remove("invisible");
  document.querySelector("#optionsTexto").classList.add("invisible");

  titulo.textContent = document.querySelector(".valor-titulo").value;
  descricao.textContent = document.querySelector(".valor-desc").value;
  activeText = false;
});

var activeText = false;
document.querySelector("#texto").addEventListener('click', () => {
  if (!activeText){
    document.querySelector("#tituloTexto").classList.toggle("invisible");
    document.querySelector("#optionsTexto").classList.toggle("invisible");
    activeText = true;
  }  
});

//Edição do Fundo da página
document.querySelector("#rain").addEventListener('click', () => {
    document.querySelector("#sky").classList.remove("moon");
    document.querySelector("#sky").classList.remove("stars");
    document.querySelector("#sky").classList.remove("cloud");
    document.querySelector("#sky").classList.add("rain");
});

document.querySelector("#moon").addEventListener('click', () => {
    document.querySelector("#sky").classList.remove("rain");
    document.querySelector("#sky").classList.remove("stars");
    document.querySelector("#sky").classList.remove("cloud");
    document.querySelector("#sky").classList.add("moon");
});

document.querySelector("#stars").addEventListener('click', () => {  
    document.querySelector("#sky").classList.remove("moon");
    document.querySelector("#sky").classList.remove("rain");
    document.querySelector("#sky").classList.remove("cloud");
    document.querySelector("#sky").classList.add("stars");
});

document.querySelector("#cloud").addEventListener('click', () => {
    document.querySelector("#sky").classList.remove("moon");
    document.querySelector("#sky").classList.remove("stars");
    document.querySelector("#sky").classList.remove("rain");
    document.querySelector("#sky").classList.add("cloud");
});


