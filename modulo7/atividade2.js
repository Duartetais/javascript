import leia from 'readline-sync';


let totalnumeropares = 0;
let totalnumeroipares = 0;


for (let i = 1; i <= 10; i++) {
    
    
    const num = leia.questionInt(`Digite o ${i}o numero: `);

    if (num % 2 === 0) {
        
        totalnumeropares++; 
    } else {
        
        totalnumeroipares++;
    }
}


console.log(`\nTotal de números pares: ${totalnumeropares}`);
console.log(`Total de números ímpares: ${totalnumeroipares}`);