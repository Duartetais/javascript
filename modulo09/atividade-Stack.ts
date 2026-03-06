import { Stack } from "./Stack";
import readline = require('readline-sync');
const pilha = new Stack<string>();

let opcao = 0;

do {

    console.log("\n");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");

    opcao = readline.questionInt("\nDigite uma Opcao: ");

    switch (opcao) {

        case 1:

            let livro = readline.question("Digite o nome do livro: ");

            pilha.push(livro);

            console.log("Pilha:");

            pilha.printStack();

            console.log("Livro adicionado!");

            break;

        case 2:

            console.log("Lista de Livros na Pilha:");

            if (pilha.isEmpty()) {
                console.log("A pilha esta vazia!");
            } else {
                pilha.printStack();
            }

            break;

        case 3:

            if (pilha.isEmpty()) {
                console.log("\nA pilha esta vazia!");
            } else {

                pilha.pop();

                console.log("\nPilha:");
                pilha.printStack();

                console.log("\nUm livro foi retirado da pilha!");

            }

            break;

        case 0:

            console.log("\nPrograma Finalizado!");

            break;

        default:

            console.log("\nOpcao invalida!");

    }

} while (opcao != 0);

// teste final com string
pilha.push("Livro exemplo");

pilha.printStack();

