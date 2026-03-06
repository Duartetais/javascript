import { Queue } from "./Queue";
import readline = require('readline-sync');

const fila = new Queue<string>();

let opcao = 0;

do {

    console.log("\n             Menu          ");

    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");


    opcao = readline.questionInt("\nDigite uma opcao: ");

    switch (opcao) { 

        case 1: 

            let nome = readline.question("Digite o nome do cliente: ");

            fila.enqueue(nome);

            console.log("Cliente adicionado!");

            console.log("Fila atual:");
            fila.printQueue();

            break;

        case 2:

            console.log("Clientes na fila:");

            if (fila.isEmpty()) {
                console.log("A fila esta vazia");
            } else {
                fila.printQueue();
            }

            break;

        case 3:

            if (fila.isEmpty()) {
                console.log("Nao tem clientes na fila");
            } else {

                let clienteChamado = fila.dequeue();

                console.log("Cliente chamado: " + clienteChamado);

                console.log("Fila agora:");
                fila.printQueue();

            }

            break;

        case 0:

            console.log("Programa encerrado");

            break;

        default:

            console.log("Opcao invalida");

    }

} while (opcao != 0); 