// Objects - a list of named properties

var jason = { firstName: "Jason", lastName: "Tennant", age: 20 };  // KEY POINT
//var jason = { age: 20, firstName: "Jason", lastName: "Tennant" };  

printAge(jason);

function printAge(person) {
    console.log(`Age is ${person.age}`);
}


//printAge({ firstName: "Jason", lastName: "Tennant", age: 20 });   // KEY POINT
