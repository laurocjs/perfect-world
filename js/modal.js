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
botaoFecharModal.addEventListener('click', fecharModal);


botaoVoltar.addEventListener('click', () => trocaImagem(-1));
botaoAvancar.addEventListener('click', () => trocaImagem(1));

const setIntro = text => {
  localStorage.setItem('emphatic', text);
  $('.emphatic').html(text);
}

const menuInicial = () => {
  let menu = 
  '<article class="item" data-item="1">Trocar Título</article> <article class="item" data-item="2">Trocar Favicon</article> <article class="item" data-item="3">Criar Galeria</article> <article class="item" data-item="4">Trocar Personagem</article> <article class="item" data-item="5">Colocar Música</article> <article class="item" data-item="6">Alterar Textura do Chão</article>';
  $('#menu-itens').html(menu);
}

const trocaTitulo = () => {
  let menu = '<h1>Troca Título</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

const trocaFavicon  = () => {
  let menu = '<h1>Troca Favicon</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

const criarGaleria  = () => {
  let menu = '<h1>Criar Galeria</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

const trocarPersonagem  = () => {
  let menu = '<h1>Troca Personagem</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

const colocarMusica  = () => {
  let menu = '<h1>Colocar Musica</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

const alterarChao  = () => {
  let menu = '<h1>Alterar Galeria</h1><article data-item="0">voltar</article>'
  $('#menu-itens').html(menu);
}

$("#menu-itens").on('click', 'article', 
  (res) => {
    let item = $(res.target).data('item');
    let text = 'Item ' + item;
    if (item == 0)
      menuInicial();
    else if (item == 1)
      trocaTitulo();
    else if (item == 2)
      trocaFavicon();
    else if (item == 3)
      criarGaleria();
    else if (item == 4)
      trocarPersonagem();
    else if (item == 5)
      colocarMusica();
    else if (item == 6)
      alterarChao();
  }
);