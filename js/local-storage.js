// Lavel One 
// set name value in a local storage
localStorage.setItem('Name', 'Shakib-khan');
localStorage.setItem('Age', '40');

// console name and age
console.log(localStorage.getItem('Name'))
console.log(localStorage.getItem('Age'))

// remove setItem from the local storage
localStorage.removeItem('Name');
localStorage.removeItem('Age')

// set an object to a local storage
const person = {
    firstName: 'abraham',
    lastName: 'Linkon'
}

const personStringify = JSON.stringify(person);
localStorage.setItem('person', personStringify)