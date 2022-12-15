// Pythagoreum Theorem - a^2 + b^2 = c^2
// Used to find the hypotenuse of a right angle triangle.

// Accept user input as string, then convert to number datatype, then assign that value to variable a. Do same to variable b.
// let a = Number(window.prompt("Enter edge A"));
// let b = Number(window.prompt("Enter edge B"));
let a;
let b;
let c;

document.getElementById("myButton").onclick = function() {
	a = Number(document.getElementById("aTextBox").value);
	b = Number(document.getElementById("bTextBox").value);
	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	document.getElementById("clabel").innerHTML = "The hypotenuse is: " + c;
}

// C is equal to the square root of the value of variable a squared, plus the value of variable b squared.
console.log("The hypotenuse is:", c); // print the hypotenuse to the console
