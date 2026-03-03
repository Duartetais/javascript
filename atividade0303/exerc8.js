import leia from "readline-sync"

 let saldo = 1000.00;

let operacao = leia.questionInt("Operacao (1-Saldo, 2-Saque, 3-Deposito): ");

switch (operacao) {

    case 1:
        console.log("Operacao - Saldo");
        console.log("Saldo: R$ " + saldo.toFixed(2));
        break;

    case 2:
        console.log("Operacao - Saque");
        let valorSaque = leia.questionFloat("Valor: R$ ");

        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        } else {
            console.log("Saldo Insuficiente!");
        }
        break;

    case 3:
        console.log("Operacao - Deposito");
        let valorDeposito = leia.questionFloat("Valor: R$ ");

        saldo += valorDeposito;
        console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        break;

    default:
        console.log("Operacao Invalida!");
}