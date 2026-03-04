import leia from 'readline-sync';


const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];


const nprocurado = leia.questionInt("Digite o numero que voce deseja encontrar: ");


let posicao = -1;


for (let i = 0; i < vetor.length; i++) {
    
    
    if (vetor[i] === nprocurado) {
        posicao = i; 
        break;       
    }
}

// 4. Saída de dados com base no resultado da busca
if (posicao !== -1) {
    console.log(`O número ${nprocurado} está localizado na posição: ${posicao}`);

    
} else {
    console.log(`O número ${nprocurado} não foi encontrado!`);
}