// con il while

// var i = 0;
// var numero;
// var tot = 0;
// while (i < 5) {
//   numero = parseInt(prompt('Inserisci un numero '));
//   tot = tot + numero;
//   i++;
// }
// console.log(tot);


// con il for

// var numero;
// var tot = 0;
// for (var i = 0; i < 5; i++) {
//   numero = parseInt(prompt('Inserisci un numero '));
//   tot = tot + numero;
// }
//
// console.log(tot);


// oppure sempre con il for
var numeri_utenti = [];
for (var i = 0; i < 5; i++) {
  numero = parseInt(prompt('Inserisci un numero '));
  numeri_utenti.push(numero);
}
var somma = 0
for (var i = 0; i < numeri_utenti.length; i++) {
  somma = somma + numeri_utenti[i]
}

console.log(somma);
