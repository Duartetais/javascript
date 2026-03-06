import readlinesync = require("readline-sync");


let numeros = new Set();

console.log("Digite 5 números inteiros não repetidos:");


while (numeros.size < 5

) {
    let valor = readlinesync.questionInt("Digite um numero: ");
    
   
    numeros.add(valor);
}

console.log("Listar dados do Set:");
numeros.forEach(num => {
    console.log(num);
});