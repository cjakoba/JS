// Arrays in JS can be mixed type (numbers with strings and booleans, etc)
// Don't need to know the size it needs to be at execution, unlike C.
// Arrays are not only a type of data struture, but also a special type of object with properties.
const planets = ["Mercury", "Venus", "Earth", "Mars"];

console.log(planets[0]);
console.log(planets[4]); // When you try to access a value outside the array you get undefined.

const instruments = ["piano", "drums", "trumpet"];

console.log(instruments.length); // get the length property of the array


// Array functions
instruments.push("guitar", "violin"); //pushing an item into the last spot of the array
instruments.unshift("cowbell"); // adding to the beginning of an array

// Note: push and shift methods are often used to create highly organized data structures called queues.
// Follows FIFO - first in, first out.

const numbers = [100, 200, 300, 400, 500];

