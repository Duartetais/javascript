import leia from 'readline-sync';

let numero;
let soma = 0;
let contador = 0;

do {
    
    numero = leia.questionInt("Digite um numero: ");

  
    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }


} while (numero !== 0);


if (contador > 0) {
    const media = soma / contador;
    console.log(`A média dos números múltiplos de 3 é: ${media}`);


} else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}

