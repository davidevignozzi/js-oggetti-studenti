// studente
var student = {
  name: 'Davide',
  lastname: 'Vignozzi',
  age: '22'
}

// Stampare a schermo attraverso il for tutte le proprietà.
for (var key in student) {
  console.log(student[key])
}

/* --------------------------------- */

// studenti
var students = [
    {'name': 'Alessia', 'lastname': 'Pellicoro', 'age': 23},
    {'name': 'Gabriele', 'lastname': 'Donatone', 'age': 23},
    {'name': 'Rossella', 'lastname': 'Notarnicola', 'age': 33}
];

// stampare per ogni studente nome e cognome
for (var i = 0; i < students.length; i++){
    var thisStudent = students[i];

    console.log(thisStudent.name);
    console.log(thisStudent.lastname);
}

/* --------------------------------- */

var newName = prompt('Inserisci il nome del nuovo studente');
var newLastname = prompt('Inserisci il cognome del nuovo studente');
var newAge = prompt('Inserisci l\'età del nuovo studente');

students.push({
    'name': newName,
    'lastname': newLastname,
    'age': newAge
});

console.log(students);
