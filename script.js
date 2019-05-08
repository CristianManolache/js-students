// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il "for in" tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
console.log("-----------Benvenuti classe 5^----------------");
var studente = [
  {
    "nome": "Cristian",
    "cognome": "Manolache",
    "eta": "23"
  }
]
for (var field in studente) {
  console.log(studente[field]);
}

var classe = [
  {
    "nome": "Rahma",
    "cognome": "Jebali",
    "eta": "25"
  },
  {
    "nome": "Alexandru",
    "cognome": "Manolache",
    "eta": "29"
  },
  {
    "nome": "Cristiano",
    "cognome": "Ronaldo",
    "eta": "34"
  },
  {
    "nome": "Mario",
    "cognome": "Rossi",
    "eta": "28"
  },
  {
    "nome": "Roberto",
    "cognome": "Lanzone",
    "eta": "45"
  }
];
classe.push(studente);      //inserisco l studente nell array clase.

for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + "" + classe[i].cognome);
}
// Inserisco i dati dell nuovo studente
var nome_studente = prompt("Inserisci il nome dello studente");
var cognome_studente = prompt("Inserisci il cognome dello studente");
var eta_studente = prompt("Inserisci l eta dello studente");

var nuovo_studente = {
  "nome": nome_studente,
  "cognome": cognome_studente,
  "eta": eta_studente,
};
classe.push(nuovo_studente);  //inserisco l studente nuovo nell array classe.

//Stampo i studenti compreso quello nuovo
function print_studenti(lista_studenti) {
  for (var i = 0; i < lista_studenti.length; i++) {
    console.log(lista_studenti[i].nome + " " + lista_studenti[i].cognome)
  }
}
