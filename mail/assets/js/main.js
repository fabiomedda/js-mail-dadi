/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

var emailLista = ["fabio@gmail.com", "franco@gmail.com",
"peppe@gmail.com", "lino@gmail.com",
"pippo@gmail.com", "sandro@gmail.com"];

// var emailUtente = prompt("Inserisci la tua email");



var btnInvia = document.getElementById("invia");

btnInvia.addEventListener("click", function(){

var emailUtente = document.getElementById('email').value;
//console.log(emailUtente);

for (var i = 0; i < emailLista.length; i++) {

  //console.log(emailLista[i]);

  if (emailUtente == emailLista[i]) {
    document.getElementById('utente').innerHTML = "sei in lista, entra alla festa privata con restrizioni covid";
    //console.log("sei in lista, entra alla festa privata con restrizioni covid");
    //alert("sei in lista, entra alla festa privata con restrizioni covid");
    var x = i;
  }

}

if (emailUtente != emailLista[x]) {
  document.getElementById('utente').innerHTML = "non sei in lista, non puoi entrare alla festa privata con restrizioni covid";
  //console.log("non sei in lista, non puoi entrare alla festa privata con restrizioni covid");
  //alert("non sei in lista, non puoi entrare alla festa privata con restrizioni covid");
}

});
