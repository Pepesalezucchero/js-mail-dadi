/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//generiamo dei numeri casuali, per il giocatore e per il computer
let userNumber = Math.floor(Math.random() * 6 + 1);
console.log("Numero uscito all'utente", userNumber);

let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log("Numero uscito al pc", pcNumber);

//stabiliamo il vincitore confrontando i numeri dei dadi ottenuti, il più alto vince

if (userNumber > pcNumber) {
    alert("Hai vinto!");

} else if (userNumber === pcNumber) {
    alert("Parità");

} else {
    alert("Sconfitta :(");
}