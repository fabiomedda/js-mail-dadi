/*
Gioco dei dadi
Generare un numero random da 1  a 6, sia per
il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa
il punteggio più alto.
*/

var vuoiGiocare = prompt("Vuoi fare un gioco con me? rispondi, 'si' o 'no'.");

var lancioDadi = [];

while (vuoiGiocare == "si") {


if (vuoiGiocare == "si"){
  for (var i = 0; i < 2; i++) {

    lancioDadi[i] = Math.ceil( Math.random() * 6 );
    console.log(lancioDadi[i]);
  }
}

console.log(lancioDadi);

if (lancioDadi[0] > lancioDadi[1]) {
  alert("Hai vinto");
  console.log("Hai vinto");
} else if (lancioDadi[0] < lancioDadi[1]) {
  alert("Ha vinto il computer");
  console.log("Ha vinto il computer");
} else {
  alert("Parità");
  console.log("Parità");
}

vuoiGiocare = prompt("Vuoi continuare a giocare? rispondi, 'si' o 'no'.");
}
