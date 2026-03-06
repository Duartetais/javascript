
import leia from "readline-sync"

let numero1 = leia.questionFloat("Digite o 1º numero: ");
let numero2 = leia.questionFloat("Digite o 2º numero: ");
let operacao = leia.questionInt("Digite a operação desejada (1 - Soma, 2 - Subtracao, 3 - Multiplicacao, 4 - Divisao): ");

let resultado = 0;

switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        console.log("Resultado: " + resultado);
        break;

    case 2:
        resultado = numero1 - numero2;
        console.log("Resultado: " + resultado);
        break;

    case 3:
        resultado = numero1 * numero2;
        console.log("Resultado: " + resultado);
        break;

    case 4:
        resultado = numero1 / numero2;
        console.log("Resultado: " + resultado);
        break;

    default:
        console.log("Operacao Invalida!");
}