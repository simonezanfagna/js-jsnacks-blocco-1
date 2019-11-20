var numero ;
var n_cifre = 0;
var n = '';

do {
  numero = prompt('Inserisci un numero');
  n = numero.toString();
  n_cifre = n.length;
} while (isNaN(n) || (n_cifre != 4));



// metodo 1
// var somma_cifre = parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]) + parseInt(n[3]);
// console.log(somma_cifre);


// metodo 2
var somma_cifre = 0;
for (var i = 0; i < n.length; i++) {
  somma_cifre += parseInt(n[i])
}
console.log(somma_cifre);
