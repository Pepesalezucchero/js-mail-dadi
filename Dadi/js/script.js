/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//generiamo dei numeri casuali, per il giocatore e per il computer

//stabiliamo il vincitore confrontando i numeri dei dadi ottenuti, il più alto vince
const buttonSend = document.getElementById("start-btn");
buttonSend.addEventListener("click",

    function () {

        let userNumber = Math.floor(Math.random() * 6 + 1);
        console.log("Numero uscito all'utente", userNumber);

        let pcNumber = Math.floor(Math.random() * 6 + 1);
        console.log("Numero uscito al pc", pcNumber);

        if (userNumber > pcNumber) {
            document.getElementById("lucky").innerHTML = "Vittoria!";
            alert("Hai avuto culo!");

        } else if (userNumber === pcNumber) {
            document.getElementById("lucky").innerHTML = "Pareggio...";
            alert("Parità");

        } else {
            document.getElementById("lucky").innerHTML = "Sconfitta :(";
            alert("Non hai avuto culo :(");
        }

        document.getElementById("user").innerHTML = userNumber;
        document.getElementById("pc").innerHTML = pcNumber;
    }
);