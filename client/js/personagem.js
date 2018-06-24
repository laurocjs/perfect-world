let limiteEsquerdo = 0;
let limiteBaixo = 0;
let limiteDireito = 10000;
let posicao = limiteEsquerdo + 1;
let posicaoy = limiteBaixo + 1;
let jogador = document.querySelector("#player");
window.setInterval(gravidade, 100);

let type = jogador.dataset.character;
if (!type)
	type = "pato";

jogador.classList.add(type + '-parado');

if (document.querySelector("#trocarPersonagem")) {
	let botaoTrocarPersonagem = document.querySelector("#trocarPersonagem");
	botaoTrocarPersonagem.addEventListener('click', mudaPersonagem);
}

function gravidade() {
	if (posicaoy < 0) {
		posicaoy += 10;
		jogador.style.marginTop = posicaoy + "px";
		if (posicaoy >= 0)
			jogador.classList.remove(type + '-pulo');
		jogador.classList.add(type + '-parado');
	}
}

document.addEventListener('keydown', (event => {
	if (event.keyCode == 37 && posicao > limiteEsquerdo) {
		posicao -= 5;
		jogador.style.marginLeft = posicao + "px";
		jogador.classList.remove(type + '-parado');
		jogador.classList.remove(type + '-direita');
		jogador.classList.add(type + '-esquerda');
	}
	if (event.keyCode == 39 && posicao < limiteDireito) {
		if (posicao < window.innerWidth - jogador.clientWidth) {
			posicao += 5;
			jogador.style.marginLeft = posicao + "px";
		}
		jogador.classList.remove(type + '-parado');
		jogador.classList.remove(type + '-esquerda');
		jogador.classList.add(type + '-direita');
	}
	if (event.keyCode == 38 && posicao < limiteDireito) {
		jogador.classList.remove(type + '-esquerda');
		jogador.classList.remove(type + '-direita');
		jogador.classList.remove(type + '-parado');
		if (posicaoy >= 0) {
			jogador.classList.add(type + '-pulo');
			posicaoy -= 50;
			jogador.style.marginTop = posicaoy + "px";
		}
	}
}));

document.addEventListener('keyup', (event => {
	if (event.keyCode == 37 && posicao > limiteEsquerdo) {
		jogador.classList.remove(type + '-esquerda');
		jogador.classList.remove(type + '-direita');
		jogador.classList.add(type + '-parado');
	}
	if (event.keyCode == 39 && posicao < limiteDireito) {
		jogador.classList.remove(type + '-esquerda');
		jogador.classList.remove(type + '-direita');
		jogador.classList.add(type + '-parado');
	}
	if (event.keyCode == 39 && posicao < limiteDireito) {
		jogador.classList.remove(type + '-pulo');
		jogador.classList.add(type + '-parado');
	}
}));

function mudaPersonagem() {
	
	jogador.classList = "monster";

	if (type === "pato") {
		type = "coelho";
		jogador.classList.add(type + '-parado');
		return;
	}
	if (type === "coelho") {
		type = "pato";
		jogador.classList.add(type + '-parado');
		return;
	}
	localStorage.setItem('TIPO_PERSONAGEM', type);
}