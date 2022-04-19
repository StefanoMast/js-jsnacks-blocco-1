//jsnack2. Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

//crea un array vuoto
const userList = [];

//chiedi per sei volte all'utente di inserire un numero per il tramite del ciclo for
for (let i=0; i < 6; i++) {
    const userNumber = parseInt(prompt("dimmi un  numero"));
    console.log(userNumber);
 //se il numero è dispari inseriscilo nell'array

    if (userNumber % 2 === 1) {
        userList.push(userNumber);
    }
}
console.log(userList);