let videos = ["imagens/unicornparrot.gif", "imagens/tripletsparrot.gif", "imagens/revertitparrot.gif", "imagens/metalparrot.gif", "imagens/fiestaparrot.gif", "imagens/explodyparrot.gif", "imagens/bobrossparrot.gif"];
let numerodecartas = null;
let virado = false;
let jogando = true;
let jogadas = 1;
let cartas = [];
let card1;
let card2;
let viradas = document.querySelectorAll(".virado");
const jogo = document.querySelector(".jogo");

while (((numerodecartas % 2 == 0) && numerodecartas >= 4 && numerodecartas <= 14) == false){
    numerodecartas = prompt("Quantas cartas você quer jogar? (escolha um número par de 4 a 14)");
}

for (let i = 0; i < numerodecartas; i++){
    cartas.push(i);
}

cartas.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

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
    elemento.classList.add("virando");
    if (elemento.classList.contains("virado")){
    
    } else {
        if (!virado){
            virado = true;
            card1 = elemento;
            jogadas++;
            return jogadas;
        } else {
            virado = false;
            card2 = elemento;
    
            if (card1.childNodes[3].innerHTML == card2.childNodes[3].innerHTML){
                setTimeout(function(){   card1.classList.remove("virando"); card2.classList.remove("virando"); }, 500);
                card1.classList.add("virado");
                card2.classList.add("virado");
    
                viradas = document.querySelectorAll(".virado");
    
                if (viradas.length == numerodecartas){
                    jogando = false;
                    console.log(viradas.length);
                    jogadas++
                    const tempo = document.querySelector(".contador").innerHTML;
                    setTimeout(function(){  alert("Você ganhou em " + jogadas + " jogadas! e em " + tempo + " segundos"); }, 1000);
                }  
            } else {
                setTimeout(function(){   card1.classList.remove("virando"); card2.classList.remove("virando"); }, 1000);
                jogadas++
            }
        }
    }
}

let contador = 0;
let intervalo;

function contar() {
    intervalo = setInterval(passartempo, 1000);
}

function passartempo() {
  contador++;
  document.querySelector(".contador").innerHTML = contador;
}

contar();