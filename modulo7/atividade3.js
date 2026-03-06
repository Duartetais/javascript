import leia from 'readline-sync';

let menores21 = 0;
let maiores50 = 0;
let contador = 0;


let idade = leia.questionInt("Digite uma idade: ");

// while (idade >= 0) o loop vai continuar rodando enquanto a idade for positiva ou zero. Se for negativa, o loop para (se eu colocar -.)


while (idade >= 0 && contador < 6) { // limita o número de pessoas a 6, para evitar que o programa fique pedindo idades para sempre. O contador começa em 0, e a cada idade digitada, ele aumenta 1. Quando chegar a 6, o loop para.

    contador++;

    if (idade < 21) {
        menores21++;
    } 
   
    else if (idade > 50) {
        maiores50++;
    }


    idade = leia.questionInt("Digite uma idade: ");
}


console.log(`Total de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);