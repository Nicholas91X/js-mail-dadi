// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//     Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//     Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// ******** esercizio 1
// const listaMail = ["francesco@gmail.com", "mario@gmail.com", "giovanni@gmail.com", "valentina@gmail.com", "monica@yahoo.com", "cecilia@gmail.com", "alessandro@hotmail.it"];

// let mailUtente = prompt("Inserisci la tua mail");

// let sentinella = false;

// for(i = 0; i < listaMail.length; i++) {
//     if (listaMail[i] = mailUtente) {
//         sentinella = true;
//         console.log(listaMail[i])
//     }
// }

// if (sentinella == true) {
//     alert("Mail presente in elenco")
// }

// ********* esercizio 2
document.getElementById("button").addEventListener("click", function(){
    let computer = Math.floor(Math.random() * 7);
    console.log(computer);
    document.getElementById("risultato-1").innerHTML = computer;

    let giocatore = Math.floor(Math.random() * 7);
    console.log(giocatore);
    document.getElementById("risultato-2").innerHTML = giocatore;

    if (giocatore > computer) {
        setTimeout(function(){ alert("Hai vinto!"); }, 300);
    } else if (giocatore < computer) {
        setTimeout(function(){ alert("Hai perso..."); }, 300);
    } else {
        setTimeout(function(){ alert("Pari e patta"); }, 300);
    }
    
});

