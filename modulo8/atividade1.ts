import readlinesync = require("readline-sync");

let cores = [];

console.log("--- Digitar 5 Cores ---");
 
for (let i = 0; i < 5; i++) {
    let cor = readlinesync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

console.log("Listar todas as cores:");
for (let c of cores) {
    console.log(c);
}


console.log("Ordenar as cores:");
cores.sort(); 
for (let c of cores) {
    console.log(c);
}