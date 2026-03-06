import leia from "readline-sync"

let algo1, algo2, algo3;

algo1 = leia.question('Digite algo: ');
algo2 = leia.question('Digite algo: ');
algo3 = leia.question('Digite algo: ');   

if (algo1 === "vertebrado") {
    if (algo2 === "ave") {
        if (algo3 === "carnivoro") {
            console.log("Aguia");
        } else if (algo3 === "onivoro") {
            console.log("Pomba");
        }
    } else if (algo2 === "mamifero") {
        if (algo3 === "onivoro") {
            console.log("Homem");
        } else if (algo3 === "herbivoro") {
            console.log("Vaca");
        }
    }
} else if (algo1 === "invertebrado") {
    if (algo2 === "inseto") {
        if (algo3 === "hematofago") {
            console.log("Pulga");
        } else if (algo3 === "herbivoro") {
            console.log("Lagarta");
        }
    } else if (algo2 === "anelideo") {
        if (algo3 === "hematofago") {
            console.log("Sanguessuga");
        } else if (algo3 === "onivoro") {
            console.log("Minhoca");
        }
    }
}