// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato

var listaEmail=["boolean@gmail.it","davidec06@gmail.com","adrianogrimaldi@gmail.com","andreacastenetto@gmail.com","gianlucapesce@gmail.com"];
console.log(listaEmail);

var emailUtente= prompt("inserisci la tua mail per verificare la presenza nella lista desiderata:");
console.log(emailUtente);

var confronto=false;

for (var i = 0; i < listaEmail.length; i++) {

  if (emailUtente==listaEmail[i]) {
    confronto=true;
  }
}

if (confronto==true) {

  document.getElementById("check").innerHTML = "Accesso Consentito";

}else {

  document.getElementById("check").innerHTML = "Accesso non Consentito";

}
