import leia from 'readline-sync';


let totalbackend = 0, mulheresfrontend = 0, homensmobile40 = 0;
let naobinariosFullStack30 = 0, totalpessoas = 0, somaidades = 0;

let continuar = "S";

while (continuar.toUpperCase() === "S") {
   
    const idade = leia.questionInt("Idade: ");
    console.log("-- Identidade de Gênero --");
    console.log("1 – Mulher Cis");
    console.log("2 – Homem Cis");
    console.log("3 – Não Binário");
    console.log("4 – Mulher Trans");
    console.log("5 – Homem Trans");
    console.log("6 – Outros");
    const genero = leia.questionInt("Escolha o Genero: ");
    console.log("\n-- Pessoa Desenvolvedora --");
    console.log("1 – Backend");
    console.log("2 – Frontend");
    console.log("3 – Mobile");
    console.log("4 – FullStack");
    const cargo = leia.questionInt("Escolha o Cargo: ");

    totalpessoas++;
    somaidades += idade;


    if (cargo === 1) totalbackend++;


    if ((genero === 1 || genero === 4) && cargo === 2) {
        mulheresfrontend++;
    }

   
    if ((genero === 2 || genero === 5) && cargo === 3 && idade > 40) {
        homensmobile40++;
    }

  
    if (genero === 3 && cargo === 4 && idade < 30) {
        naobinariosFullStack30++;
    }

 
    continuar = leia.question("Deseja continuar (S/N): ");
}


const media = somaidades / totalpessoas;

console.log(`Total de pessoas desenvolvedoras Backend: ${totalbackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresfrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensmobile40}`);
console.log(`Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos: ${naobinariosFullStack30}`);
console.log(`O numero total de pessoas que responderam a pesquisa: ${totalpessoas}`);
console.log(`A media de idade das pessoas que responderam a pesquisa: ${media.toFixed(2)}`);