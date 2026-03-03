import leia from 'readline-sync'

let numero, positivo = 0, negativo = 0, par = 0, impar = 0;

numero = leia.questionInt('Digite um numero: ');

if (numero > 0) {
    console.log('O numero é positivo.');
} else if (numero < 0) {
    console.log('O numero é negativo.');
} 


if (numero % 2 === 0) {
    console.log('O numero é par.'); 
} else {
    console.log('O numero é impar.');
}