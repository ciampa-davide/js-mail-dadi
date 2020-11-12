// Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il compute. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.


// lancio dadi

var dadoUno= Math.floor(Math.random()*6);
console.log(dadoUno);
document.getElementById("utente").innerHTML= dadoUno;

var dadoDue=Math.floor(Math.random()*6);
console.log(dadoDue);
document.getElementById("computer").innerHTML= dadoDue;

// confronto

if (dadoUno > dadoDue){

  document.getElementById("risultato").innerHTML= "Hai vinto!";

}else if (dadoDue > dadoUno){

  document.getElementById("risultato").innerHTML= "Hai perso!";

}else{
  document.getElementById("risultato").innerHTML= "Pareggio!"
}
