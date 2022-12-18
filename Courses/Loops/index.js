// DRY - Dont Repeat Yourself!
const getRandomNumber = upper => Math.floor(Math.random() * (upper)) + 1;

// While Loops - Self explainatory as per previous experience.
let counter = 0;
while (counter < 10) {
	console.log(`The random number is ${getRandomNumber(10)}`);
	counter += 1; // also rewritten as counter++, where ++ is the "increment operator"
}

console.log("Will now perform do while loop...");

// Do While Loops - Self explainatory as per previous experience.
let counter2 = 0;
do {
	console.log(`The random number is ${getRandomNumber(10)}`);
	counter2 += 1;
} while (counter2 < 10);

console.log("Will now perform a For loop...");

// For Loops - Self explainatory as per previous experience.
// Just remember, the incrementation occurs at the END of each loop iteration.
for (let counter = 0; counter < 10; counter++) {
	console.log(`The random number is ${getRandomNumber(10)}`);
}

// Handy for dynamically displaying HTML with a loop
// Here we print to the document 1 - 10 div elements
const main = document.querySelector('main');
let html = "";
for (let i = 0; i < 10; i++) {
	html += `<div>${i+1}</div>`;
}
// Better to build a temporary html variable, then print, rather than continuously update html elements per loop!
main.innerHTML = html;

// to break out early of a loop, use break;
for (let i = 0; i < 10; i++) {
	if (i == 5) {
		break;
	}
}


// FOR IN Loop for looping through an object's properties - must use bracket notation []
const person = {
	name: "Edward",
	nickname: "Duke", 
	city: "New York",
	age: 37,
	isStudent: true,
	skills: ["JavaScript", "HTML", "CSS"]
};

for (let property in person) {
	console.log(`${property}: ${person[property]}`);
}

// Can merge object with spread operator ...
	// const example = {
	    //...name,
		//...role
    // };

// Object.values() is a method that returns an array of a given object's property values.
// Object.keys() is a method that returns an array containing the property names (or keys).
// To check the length of an object: Object.keys(person).length would work







