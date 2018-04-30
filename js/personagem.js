let limiteEsquerdo = 0; let limiteBaixo = 0; let limiteDireito = 10000; 
let posicao = limiteEsquerdo+1; let posicaoy = limiteBaixo+1; let 
monstro = document.querySelector("#monster"); 
window.setInterval(gravidade, 100); function gravidade(){
	if(posicaoy < 0){
		posicaoy += 10;
		monstro.style.marginTop = posicaoy + "px";
	}
}
document.addEventListener('keydown', (event => {
  debugger;
  if (event.keyCode == 37 && posicao > limiteEsquerdo) {
    posicao -= 5;
    monstro.style.marginLeft = posicao + "px";
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    posicao += 5;
    monstro.style.marginLeft = posicao + "px";
  }
  if (event.keyCode == 38 && posicao < limiteDireito) {
	if(posicaoy >=0){
		posicaoy -= 50;
		monstro.style.marginTop = posicaoy + "px";
	}
  }
  //if (event.keyCode == 40 && posicao < limiteDireito) {
  // posicaoy += 50;
  // monstro.style.marginTop = posicaoy + "px";
  //}
}));
