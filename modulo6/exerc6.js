import leia from "readline-sync"

let nomeColaborador;
let codigoCargo;
let salarioAtual;

// 1. Solicitando os dados do colaborador
nomeColaborador = leia.question("Digite o nome do colaborador: ");
codigoCargo = leia.questionInt("Digite o código do cargo (1 a 6): ");
salarioAtual = leia.questionFloat("Digite o salário atual do colaborador: R$ ");


let cargo = "";
let percentualReajuste = 0;


switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10; // 10%
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07; // 7%
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09; // 9%
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06; // 6%
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05; // 5%
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08; // 8%
        break;
    default:
        console.log("Ops! Código de cargo inválido.");
}


let novoSalario = salarioAtual + (percentualReajuste * salarioAtual);

// 4. Mostrando o resultado na tela
console.log("Nome do colaborador: " + nomeColaborador); //
console.log("Cargo: " + cargo); //
console.log("Novo Salário reajustado: R$ " + novoSalario.toFixed(2)); 