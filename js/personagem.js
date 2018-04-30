let limiteEsquerdo = 0;
let limiteDireito = 100;
let posicao = limiteEsquerdo+1;
let monstro = document.querySelector("#monster");
document.addEventListener('keydown', (event => {
  if (event.keyCode == 37 && posicao > limiteEsquerdo) {
    posicao -= 1;
    monstro.style.marginLeft = posicao + "px";
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    posicao += 1;
    monstro.style.marginLeft = posicao + "px";
  }
}));

