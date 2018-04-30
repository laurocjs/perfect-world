var limiteEsquerdo = 0;
var limiteDireito = 100;
var posicao = limiteEsquerdo+1;
document.addEventListener('keydown', (event => {
  let monstro = document.querySelector("#monster");
  debugger;
  if (event.keyCode == 37 && posicao > limiteEsquerdo) {
    posicao -= 1;
    monstro.style.marginLeft = posicao + "px";
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    posicao += 1;
    monstro.style.marginLeft = posicao + "px";
  }
}));

