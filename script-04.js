// Start out with Jason
var firstName = "Jason";
console.log(`My name is ${firstName}`);

var age = 20;
console.log(`I am ${age} years old`);

// Change to Mary
firstName = "Mary";
console.log(`My name is ${firstName}`);

age = 25;
console.log(`I am ${age} years old`);

// Change name to John
firstName = "John";
console.log(`My name is ${firstName}`);

age = 100;
console.log(`I am ${age} years old`);

// Encapsulate the repeating logic into a function to avoid typing
// things over and over...
// function greeting(firstName, age) {
//   console.log(`My name is ${firstName}`);
//   console.log(`I am ${age} years old`);
// }
//
// greeting("Jason", 20);
// greeting("Mary", 25);
// greeting("John", 100);
