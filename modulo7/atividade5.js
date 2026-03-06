import leia from 'readline-sync';

let numero;
let somapositivos = 0;

do {
    
    numero = leia.questionInt("Digite um numero: ");

  
    if (numero > 0) {
      
        somapositivos += numero;
    }


} while (numero !== -0);


console.log(`A soma dos números positivos é: ${somapositivos}`);