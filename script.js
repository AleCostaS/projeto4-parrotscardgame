let videos = ["imagens/unicornparrot.gif", "imagens/tripletsparrot.gif", "imagens/revertitparrot.gif", "imagens/metalparrot.gif", "imagens/fiestaparrot.gif", "imagens/explodyparrot.gif", "imagens/bobrossparrot.gif"];
let numerodecartas = null;
let virado = false;
let jogando = true;
let jogadas = 1;
let cartas = [];
let card1;
let card2;
let contador = 0;
let intervalo;
let resposta;
let viradas = document.querySelectorAll(".virado");
const jogo = document.querySelector(".jogo");
const frame = 1000/60;

function gameloop() {
    console.log(viradas.length);
    if (jogando == false){
        
        contador--;
        setTimeout(function(){ alert("Você ganhou em " + jogadas + " jogadas! e em " + tempo + " segundos"); }, 1000);  
    } else {
        criandojogo();
        contar();
    }
}

function criandojogo(){
    while (((numerodecartas % 2 == 0) && numerodecartas >= 4 && numerodecartas <= 14) == false){
        numerodecartas = prompt("Quantas cartas você quer jogar? (escolha um número par de 4 a 14)");
    }
    
    for (let i = 0; i < numerodecartas; i++){
        cartas.push(i);
    }

    cartas.sort(comparador);

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
}

function comparador() { 
	return Math.random() - 0.5; 
}

function virar(elemento){
    let timer = 0;
    let cartasclicadas = document.querySelectorAll(".virando")
    if (cartasclicadas.length == 2){
        console.log("aqui")
        timer = 500;
    } else if (timer > 0){
        timer--;
    } else {
        elemento.classList.add("virando");
        if (elemento.classList.contains("virado")){
        
        } else {
            if (!virado){
                virado = true;
                card1 = elemento;
                jogadas++;
            } else {
                virado = false;
                card2 = elemento;
        
                if (card1.childNodes[3].innerHTML == card2.childNodes[3].innerHTML){
                    setTimeout(function(){   card1.classList.remove("virando"); card2.classList.remove("virando"); }, 500);
                    card1.classList.add("virado");
                    card2.classList.add("virado");
        
                    viradas = document.querySelectorAll(".virado");
                } else {
                    setTimeout(function(){   card1.classList.remove("virando"); card2.classList.remove("virando"); }, 1000);
                    jogadas++
                }
            }
        }
    }
}

function terminar(){
}

function contar() {
    intervalo = setInterval(passartempo, 1000);
}

function passartempo() {
  contador++;
  document.querySelector(".contador").innerHTML = contador;
}

function cowdown(){

}

setInterval(gameloop(), frame);