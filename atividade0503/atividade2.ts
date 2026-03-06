import readlinesync = require("readline-sync");


let conjunto = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let buscarNumero = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

if (conjunto.has(buscarNumero)) {
    console.log(`O número ${buscarNumero} foi encontrado!`); 
} else {
    console.log(`O número ${buscarNumero} não foi encontrado!`);
}