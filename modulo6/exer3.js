import leia from 'readline-sync'

let nome, sobrenome, idade, jadoou;

nome = leia.question('Digite seu nome: ');
sobrenome = leia.question('Digite seu sobrenome: ');
idade = leia.questionInt('Digite sua idade: '); 
jadoou = leia.keyInYN('Você já doou sangue antes?');

console.log("\n--- Resultado da Analise ---");

if (idade >= 18 && idade < 60) {
    // Faixa padrão: 18 até 59 anos (Apto)
    console.log(`Ola ${nome} ${sobrenome}, voce esta APTO para doar sangue! `);

} else if (idade >= 60 && idade <= 69) {
    // Faixa especial: 60 até 69 anos
    if (jadoou === true) {
        console.log(`Ola ${nome} ${sobrenome}, voce esta APTO para doar sangue! (Ja doou anteriormente)`);
    } else {
        console.log(`Ola ${nome} ${sobrenome}, voce NAO ESTA APTO. (Acima de 60 anos nao pode ser a primeira doacao)`);
    }

} else {
    // Menor de 18 ou maior de 69
    console.log(`Ola ${nome} ${sobrenome}, voce NAO ESTA APTO. (Idade fora da faixa permitida: 18 a 69 anos) `);
}

