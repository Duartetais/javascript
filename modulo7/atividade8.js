import leia from 'readline-sync';

const vetor = [];
let soma = 0;
let impares = "";
let pares = "";

for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i + 1}o numero: `);
    soma += vetor[i];
}

for (let i = 1; i < vetor; i += 2) {
    impares += vetor[i] + " ";
}


for (let i = 0; i < vetor; i++) {
    if (vetor[i] % 2 === 0) {
        pares += vetor[i] + " ";
    }
}


const media = soma / vetor


console.log("Elementos nos índices ímpares:");
console.log(impares);

console.log("Elementos pares:");
console.log(pares);

console.log("Soma: " + soma);

console.log("Média: " + media.toFixed(2));