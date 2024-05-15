let me = {
  firstName: 'Clarissa',
  lastName: 'Roeder',
}

let friend = {
  firstName: 'Aleksey',
  lastName: 'Chaikovsky',
}

let mother = {
  firstName: 'Margit', 
  lastName: 'Roeder',
}

let father = {
  firstName: 'Juergen',
  lastName: 'Roeder',
}

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(newPerson) {
    this.collection.push(newPerson)
  }
}

people.rollCall();