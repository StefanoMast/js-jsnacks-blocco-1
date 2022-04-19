//jsnack4. Chiedi un numero di 4 cifre all'utente
//e calcola la somma di tutte le cifre che compongono il numero.

//chiedo una somma di quattro numeri con prompt
const userNumber = parseInt(prompt("dimmi un numero con quattro cifre"));
console.log(userNumber)



//considero il prompt una stringa, di modo che il numero che mi dirà possa essere scisso in quattro elementi

const userNumberSplit = userNumber.split("","","","")
console.log(userNumberSplit);