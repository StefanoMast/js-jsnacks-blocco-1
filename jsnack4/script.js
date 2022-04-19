//jsnack4. Chiedi un numero di 4 cifre all'utente
//e calcola la somma di tutte le cifre che compongono il numero.

//utilizzo metodo trovato su stack overflow 
//chiedo numero di quattro cifre all'utente
let userNumber = parseInt(prompt("dimmi un numero di quattro cifre"));
console.log(userNumber);

//calcolo la somma di tutte le cifre che compongono il numero
//metto la somma a 0
sumUserNumber = 0;

//utilizzo while per far finire il ciclo, altrimenti va in loop
while (userNumber) {
    sumUserNumber += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

//stampo la somma

console.log(sumUserNumber);

