let limiteEsquerdo = 0;
let limiteBaixo = 0;
let limiteDireito = 10000;
let posicao = limiteEsquerdo+1;
let posicaoy = limiteBaixo+1;
let monstro = document.querySelector("#monster");
window.setInterval(gravidade, 100);
let type="pato";


function gravidade(){
	if(posicaoy < 0){
		posicaoy += 10;
		monstro.style.marginTop = posicaoy + "px";
		if(posicaoy>=0)
			monstro.classList.remove(type+'-pulo');
			monstro.classList.add(type+'-parado');
	}
}

document.addEventListener('keydown', (event => {
  if (event.keyCode == 37 && posicao > limiteEsquerdo) {
    posicao -= 5;
    monstro.style.marginLeft = posicao + "px";
	monstro.classList.remove(type+'-parado');
	monstro.classList.remove(type+'-direita');
	monstro.classList.add(type+'-esquerda');
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    posicao += 5;
    monstro.style.marginLeft = posicao + "px";
	monstro.classList.remove(type+'-parado');
	monstro.classList.remove(type+'-esquerda');
	monstro.classList.add(type+'-direita');
  }
  if (event.keyCode == 38 && posicao < limiteDireito) {
	monstro.classList.remove(type+'-esquerda');
	monstro.classList.remove(type+'-direita');
	monstro.classList.remove(type+'-parado');
	if(posicaoy >=0){
		monstro.classList.add(type+'-pulo');
		posicaoy -= 50;
		monstro.style.marginTop = posicaoy + "px";
	}
  }
  if (event.keyCode == 40) {
	monstro.classList="";
	
	if(type==="pato"){
		type="coelho";
		monstro.classList.add(type+'-parado');
		return;
	}
	if(type==="coelho"){
		type="pato";
		monstro.classList.add(type+'-parado');
		return;
	}
  }
  //if (event.keyCode == 40 && posicao < limiteDireito) {
  //  posicaoy += 50;
  //  monstro.style.marginTop = posicaoy + "px";
  //}
}));

document.addEventListener('keyup', (event => {
  if (event.keyCode == 37 && posicao > limiteEsquerdo) {
    monstro.classList.remove(type+'-esquerda');
	monstro.classList.remove(type+'-direita');
	monstro.classList.add(type+'-parado');
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    monstro.classList.remove(type+'-esquerda');
	monstro.classList.remove(type+'-direita');
	monstro.classList.add(type+'-parado');
  }
  if (event.keyCode == 39 && posicao < limiteDireito) {
    monstro.classList.remove(type+'-pulo');
	monstro.classList.add(type+'-parado');
  }
}));
