let videos = ["imagens/unicornparrot.gif", "imagens/tripletsparrot.gif", "imagens/revertitparrot.gif", "imagens/metalparrot.gif", "imagens/fiestaparrot.gif", "imagens/explodyparrot.gif", "imagens/bobrossparrot.gif"];
let numerodecartas = 0;
let virado = false;
let jogando = true;

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
let card1;
let card2;
let viradas = document.querySelectorAll(".virado");

function virar(elemento){
    elemento.classList.add("virando");

    if (!virado){
        virado = true;
        card1 = elemento;
        return;
    } else {
        virado = false;
        card2 = elemento;

        if (card1.childNodes[3].innerHTML == card2.childNodes[3].innerHTML){
            card1.classList.remove("virando");
            card2.classList.remove("virando");
            card1.classList.add("virado");
            card2.classList.add("virado");
        } else {
            card1.classList.remove("virando");
            card2.classList.remove("virando");
        }
    }

    while (jogando == true){
        if (viradas.length == numerodecartas){
            jogando = false;
            alert("ganhei")
        } else {
            viradas = document.querySelectorAll(".virado");
        }
    }
}
