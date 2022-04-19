//jsnack1. L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedere due parole all'utente per il tramite di prompt
const firstWord = prompt("dimmi una parola");
console.log(firstWord);

const secondWord = prompt("dimmi un'altra parola");
console.log(secondWord);

if (firstWord.length > secondWord.length) {
    console.log(`${firstWord} ${secondWord}`);
} else if (secondWord.length > firstWord.length) {
    console.log (`${secondWord} ${firstWord}`);
} else {
    console.log("le due parole hanno la stessa quantità di caratteri")
}


