import leia from 'readline-sync';


let notas = [];
let medias = [];

console.log("Cadastro de Notas");


for (let linha = 0; linha < 2; linha++) {
    notas[linha] = []; 
    let somanotas = 0;

    console.log(`Notas do Participante ${linha + 1}:`);
    

    for (let coluna = 0; coluna < 4; coluna++) {
        let nota = leia.questionFloat(`Digite a nota do ${coluna + 1} bimestre: `);
        notas[linha][coluna] = nota; 
        somanotas += nota; 
    }

  
    medias[linha] = somanotas / 4;
}


console.log("Médias Finais");
console.log(medias.map(m => m.toFixed(1)).join(" | "));
