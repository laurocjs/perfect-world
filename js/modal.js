// Modal
let modal = document.querySelector("#modal");
let backdrop = document.querySelector(".backdrop");

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
  setGaleriaModal('teste', 'desc', ['http://165.227.205.28/web/perfect-world/resources/images/cuei-parado.png', 'http://165.227.205.28/web/perfect-world/resources/images/cuei-direita.png'])
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


botaoVoltar.addEventListener('click', () => trocaImagem(-1));
botaoAvancar.addEventListener('click', () => trocaImagem(1));