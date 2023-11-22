/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//inserisco delle email che sono già presenti nella lista per accedere

const userSubscribe = ["pinoilfagiolino@gmail.com", "milanochebellamano@gmail.com", "ginalapaperina@gmail.com", "dulcisinfundo@hotmail.it"];
console.log(userSubscribe);

//chiedo la mail all'utente che cerca di accedere alla pagina

const userEmail = document.getElementById("email-user");
let userEmailController;

//aggiungo il bottone
const buttonSend = document.getElementById("email-btn");
buttonSend.addEventListener("click",

    //controllo che, all'inserimento della mail, se non presente tra quelle registrate mi impedisce l'accesso
    function () {
        userEmailController = userEmail.value;
        console.log(userEmailController);

        for (let i = 0; i < userSubscribe.length; i++) {

            let userControl = userSubscribe[i];
            console.log(userControl);

            if(userEmailController === userControl){;
                alert("Benvenuto");

            } else {
                document.getElementById("access").innerHTML = "Accesso negato!";
            }   
        }
    }    
);
