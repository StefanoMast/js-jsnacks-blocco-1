//jsnack3. Calcola la somma e la media dei primi 10 numeri.

//creo una costante con somma e la stampo
let sumNumber = 0;
console.log("Somma" , sumNumber);

//per il tramite del ciclo for 
for (let i = 1; i <= 10; i++) {
    console.log (i);
    sumNumber = sumNumber + i; 
}

//stampo la somma finale

console.log("Somma finale" , sumNumber);

//dividere la media per la quantità di numeri

const media = sumNumber / 10;
console.log("media" , media);
