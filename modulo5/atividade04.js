const leia = require('readline-sync');

let n1 = leia.questionFloat("Digite o valor de n1: ");
let n2 = leia.questionFloat("Digite o valor de n2: ");
let n3 = leia.questionFloat("Digite o valor de n3: ");
let n4 = leia.questionFloat("Digite o valor de n4: ");


let diferenca = (n1 * n2) - (n3 * n4);

console.log("\nDiferença: " + diferenca.toFixed(1));
