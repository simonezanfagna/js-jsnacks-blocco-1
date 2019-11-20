var parola_1 = prompt("Inserisci una parola");
var parola_2 = prompt("Inserisci una parola");

if (parola_1.length > parola_2.length) {
  console.log(parola_1);
}
else if (parola_1.length < parola_2.length) {
  console.log(parola_2);
}
else {
  console.log(parola_1 + " = " + parola_2);
}
