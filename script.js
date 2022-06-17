let numerodecartas = 0;

while (((numerodecartas % 2 == 0) && numerodecartas >= 4 && numerodecartas <= 14) == false){
    numerodecartas = prompt("Quantas cartas você quer jogar? (escolha um número par de 4 a 14)");
}

let cartas = [];

for (let i = 1; i <= numerodecartas; i++){
    cartas.push(i);
}

console.log(cartas);

cartas.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}


const jogo = document.querySelector(".jogo");

for (let i = 1; i <= numerodecartas; i++){
    jogo.innerHTML += `<span class="card">
            <div class="front-face face">
            <img src="imagens/front.png"></img>
            </div>
            <div class="back-face face">
            ${cartas[i]}
            </div>
        </span>`;
}

