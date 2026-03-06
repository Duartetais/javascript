import leia from 'readline-sync';

let valor1, valor2, valor3, soma;

valor1 = leia.questionInt('Digite o primeiro valor: ');
valor2 = leia.questionInt('Digite o segundo valor: ');
valor3 = leia.questionInt('Digite o terceiro valor: ');

soma = valor1 + valor2;

if (soma > valor3) {
    console.log('A soma de valor1 e valor2 é maior que valor3.');
}else if (soma < valor3) {
    console.log('A soma de valor1 e valor2 é menor que valor3.');
}   else {
    console.log('A soma de valor1 e valor2 é igual a valor3.');
}   



