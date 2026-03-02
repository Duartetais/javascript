const leia = require('readline-sync');

let salariobruto = 2000.00;
let adicionalnoturno = 500.00;
let horasextras = 100.00;
let descontos= 200.00;
let salarioLiquido = 2800.00;

let salarioliquido = salariobruto + adicionalnoturno + (horasextras * 5) - descontos;

console.log("Salário Líquido: " + salarioliquido.toFixed(2));