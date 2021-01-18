/*
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// (1)

//studente
var studente = {
  nome: 'Davide',
  cognome: 'Vignozzi',
  età: '22'
}

// Stampare a schermo attraverso il for tutte le proprietà.

for (var key in studente) {
  console.log(studente[key])
}

// (2)
