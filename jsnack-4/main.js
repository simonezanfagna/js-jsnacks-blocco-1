var nome = prompt("Inserisci il tuo nome");
var lista = ['Pippo', 'Pluto', 'Topolino', 'Paperino'];

prima_lettera_nome = nome.charAt(0).toUpperCase();
resto_del_nome = nome.slice(1).toLowerCase();
nome = prima_lettera_nome + resto_del_nome;

var c = false;
for (var i = 0; i < lista.length; i++) {
  if (lista[i] == nome) {
    alert('Benvenuto');
    c = true;
  }
}

if (c == false) {
  alert('Non sei in lista');
}
