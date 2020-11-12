// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato

var listaEmail=["boolean@gmail.it","davidec06@gmail.com","adrianogrimaldi@gmail.com","andreacastenetto@gmail.com","gianlucapesce@gmail.com"];
console.log(listaEmail);

var emailUtente= prompt("inserisci la tua mail per verificare la presenza nella lista desiderata:");
console.log(emailUtente);
for (var i = 0; i < array.length; i++) {

  if (emailUtente == listaEmail[i]) {

      document.getElementById("check").innerHTML= "La tua E-mail e' presente nella lista";

  }else {
      document.getElementById("check").innerHTML= "La tua E-mail non e' presente nella lista. Si prega di contattare il servizio clienti per ulteriori infomazioni grazie.";
  }
}
