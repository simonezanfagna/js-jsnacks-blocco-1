var lista = [];

var numero ;
var i = 0;
while (i < 6) {
  numero = parseInt(prompt("Inserisci un numero"));
  if (isNaN(numero)) {
    alert('Devi inserire un numero')
    i--;
  }
  else if (numero % 2 != 0){
    lista.push(numero);
  }
  i++;
}

console.log(lista);
