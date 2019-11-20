
var numero_1;
var numero_2;
do{
  numero_1 = parseInt(prompt("Inserisci un numero"));
  numero_2 = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numero_1) || isNaN(numero_2));
//var numero_1 = parseInt(prompt("Inserisci un numero"));
//var numero_2 = parseInt(prompt("Inserisci un numero"));

if (numero_1 > numero_2) {
  console.log(numero_1);
}
else if (numero_2 > numero_1) {
  console.log(numero_2);
}
else {
  console.log(numero_1 + ' = ' + numero_2);
}
