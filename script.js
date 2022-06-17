let videos = ["imagens/unicornparrot.gif", "imagens/tripletsparrot.gif", "imagens/revertitparrot.gif", "imagens/metalparrot.gif", "imagens/fiestaparrot.gif", "imagens/explodyparrot.gif", "imagens/bobrossparrot.gif"];
let numerodecartas = 0;
let c = 0;
let j = 0;

while (((numerodecartas % 2 == 0) && numerodecartas >= 4 && numerodecartas <= 14) == false){
    numerodecartas = prompt("Quantas cartas você quer jogar? (escolha um número par de 4 a 14)");
}

let cartas = [];

for (let i = 0; i < numerodecartas; i++){
    cartas.push(i);
}
cartas.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

const jogo = document.querySelector(".jogo");

for (let i = 0; i < numerodecartas; i++){
    jogo.innerHTML += `<div class="card" onclick="virar(this)">
            <div class="front-face face">
                <img src="imagens/front.png"></img>
            </div>
            <div class="back-face face">
                <img src="${videos[Math.floor(cartas[i]/2)]}">
            </div>
        </div>`;
}

function virar(elemento){
    const virando = document.querySelector(".virando");
    if (virando != null){

    }
    elemento.classList.add("virando")
} 