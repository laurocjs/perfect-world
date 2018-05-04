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

document.querySelector("#evento-galeria").addEventListener("blur", (e) => {

  let listaValores = document.querySelector(".valor-imagem");
  let titulo = document.querySelector(".valor-titulo").value;
  let desc = document.querySelectorAll(".valor-desc").value;

  let lista = [];
  for (let elemento of listaValores) {
    if (elemento.value)
      lista.push(elemento.value);
  }

  setGaleriaModal(titulo, desc, lista);
});