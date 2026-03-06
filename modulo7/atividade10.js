import leia from 'readline-sync'


const totalbimestres = 4;
let matriznotas = [];
let vetormedias = [];

for (let i = 0; i < 2; i++) {
    matriznotas[i] = []; 
    let somanotas = 0;

    console.log(`Digite as notas do Participante ${i + 1}:`);


    for (let j = 0; j < 4; j++) {
        let nota = leia.questionFloat(`Nota do ${j + 1}° bimestre: `);
        matriznotas[i][j] = nota; 
        somanotas += nota;        
    }

  
    vetormedias[i] = somanotas / 4;
}


console.log("MÉDIAS FINAIS");
for (let i = 0; i < vetormedias.length; i++) {
    console.log(`Participante ${i + 1}: ${vetormedias[i].toFixed(1)}`);
}
