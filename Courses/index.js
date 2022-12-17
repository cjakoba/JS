// This is a comment in JS
/*
	Multiline comment
*/

// JS does not require ;s - but its good practice to have them as many other languages require them
console.log("test")
console.log('Its really good') // '' or ""

// window.alert("Learning JS!"); - opens an alert window before doing more javascript

// Variables
/*
	1. Declaration (var, let, const)
	2. Assignment (= assignment operator)
*/
// Number datatype
let age;
// console.log(age); - this would print "undefined", as it as a value has not been assigned yet.
age = 18; // age is a number datatype.

// Arithmetic 
age = age + 1;
age++; // increments age by 1.

// String datatype
let name = "Christian"; // Can do both declaration and assignement steps on 1 line.
let housenumber = "19" + 1; // concatinates 1 to 19, and becomes 191

// Boolean dataype
let student = true;

console.log("hello ", age); // showing strings with variable data
console.log(name);
console.log(housenumber);
console.log("Student?:", student);

// To edit a document object (in html) use document.getElementById();
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "Age: " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Arithmetic expressions
let students = 25;
students = students + 1; // add 1 to current value. (Can also use the augmented assignment operator : student += 1;)
students = students - 1; // sub 1 from curr val. (students -= 1;)
students = students * 2; // multiply students curr val by 2. (students *= 2;)
students = students / 2; // divide students curr val by 2. (students /= 2;)
let extraStudents = students % 2; // Get the remainder of students curr val when divided by 2 (students %= 2;)
console.log("Students in class: ", students);
console.log(extraStudents); // prints 1, meaning its an odd number

// Operator precedence : 1. (), 2. exponents, 3. multiplication & division, 4. addition & subtraction
let result = 1 + 2 * (7); // prints 15
let result2 = (1 + 2) * (3 + 4); // prints 21
console.log(result);
console.log(result2);

// User Input - Easy, not practical
//let username = window.prompt("Whats your username?");
//console.log(username);

// User Input - Difficult, more practical
// Do a function on button click that grabs text from input box with id myText, set variable to that content
document.getElementById("myButton").onclick = function() {
	username = document.getElementById("myText").value; 
	console.log(username); // prints variable data to the console
	document.getElementById("myLabel").innerHTML = username; // Changes the label to the vaiable data
}


/*
	TYPE CONVERSION ==========================================================================================
*/
let year = window.prompt("Enter the year");
console.log(typeof year); // is string
// This will print 20001, if user enters 2000 since user input comes in as a string
// So, we need to convert the String datatype to a number datatype
year = Number(year); // surround with Number constructor
console.log(typeof year); // becomes number
year += 1;
console.log("Next year will be", year, "."); 

// Another example
let x;
let y;
let z;
let q;
x = Number("3.14");
y = String(3.14);
z = Boolean(""); // Empty string gives you false
q = Number("Christian");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(q, typeof q); // If you try to convert something that isnt true to the constructor, it results in NaN - Not a Number
z = Boolean("10"); // String with anything in it gives you true, including "0"
console.log(z, typeof z);
z = Boolean(0); // false 
z = Boolean(); // false
console.log(z, typeof z);


/*
	CONSTANTS (CONST) =============================================================================================
*/
// Variables that cant be changed - adds security to code
// Use as often as possible if you know that variable won't be changed later!
// Naming convention for constants: All uppercase

// previous problem was that someone could edit the pi variable after it was assigned.
// let pi = 3.14159;
// pi = 394.23432;
const PI = 3.14159;
let radius;
let circumference;

// If we try to edit the constant variable we get an "Uncaught TypeError: Assignment to constant variable."!
// PI = 234.32345; 

radius = window.prompt("Enter the radius of a circule");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log("The circumference is", circumference);


/*
	JAVASCRIPT MATH ================================================================================================
*/
let p = 3.14;
let y2 = 5;
let z2 = 9;
let minimum;
let maximum;
//p = Math.round(p); // rounds to 3, pass in value or variable to round
//p = Math.floor(p); // 3, Always rounds a number down
//p = Math.ceil(p); // 4, Always rounds a number up
//p = Math.pow(p, 2); // 9.8596, p to the power of 2
//p = Math.sqrt(p); // 1.772004514666935, square root
p = Math.abs(p); // 3.14, the distance from 0
maximum = Math.max(p, y2, z2); // maximum between 3 variables
minimum = Math.min(p, y2, z2); // minimum between 3 variables
console.log(p); 
console.log(maximum); 
console.log(minimum); 

// Built in constants exist in Math
let jsPI = Math.PI;
console.log(jsPI);


/*
	RANDOM NUMBERS ================================================================================================
*/
let r = Math.random(); // Generates a random decimal from 0 to 1.
let rangerandom = Math.random() * 6; // Generates a random decimal from 0 to 5 inclusive.
// Generates a random integer from 0 to 5 inclusive by rounding down.
let randomrangeint = Math.floor(Math.random() * 6);
// Generates a random int from 1 to 6 inclusive and rounds the decimal down.
let randomstartint = Math.floor(Math.random() * 6) + 1;
console.log(r);
console.log(rangerandom);
console.log(randomrangeint);
console.log(randomstartint);


/*
	USEFUL STRING PROPERTIES AND METHODS ===========================================================================
*/
let username2 = "Christian Jakob     ";
console.log(username2);
// Get the length of a string in characters with .length property
console.log(username2.length);
// Get the character from the string at a specific index
console.log(username2.charAt(0));
// Get the index of the first occurance of a specific char (starting with 0)
console.log(username2.indexOf("a"));
// Get the index of the LASR occurance of a specific char
console.log(username2.lastIndexOf("a"));
// Trim spaces before and after a string
username2 = username2.trim();
console.log(username2);
// All uppercase
console.log(username2.toUpperCase());
// All lowercase
console.log(username2.toLowerCase());

// Replace all specific character with another character
let phoneNumber = "123-456-7890";
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", "/"); // 1st to replace, 2nd to replace with
console.log(phoneNumber);

// slice() - extracts a section of a string and return it as a new string without modifying the original string
// this works very well with indexOf() to calculate where to split strings based on a spcific character (ie. spaces)
let fullName = "Christian Jakob";
let firstName2;
let lastName2;

lastName2 = fullName.slice(10); // Start at index 10, go to end of string
console.log(lastName2);
firstName2 = fullName.slice(0, 9); // Starting index, ending index (noninclusive)
console.log(firstName2);
	
	
/*
	METHOD CHAINING ======================================================================================================
*/
// After calling 1 method, you can call other methods
// Makes code cleaner and more readable
let userName3 = "Christian      ";
let letter = userName3.charAt(0).toUpperCase().trim();
console.log(letter);
	
	
/*
	IF STATEMENTS =========================================================================================================
*/
// Self-explainatory based on previous experience in other languages.
let age2 = 65;

// Note that this prints incorrect logic, since when a statement is true to terminates the rest of the checking
// The correct way would be to put senior citizen checking first.
if (age2 >= 18) {
	console.log("You are an adult!");
} else if (age2 < 0) {
	console.log("You haven't been born yet!");
} else if (age2 >= 65) {
	console.log("You are a senior citizen!");
} else {
	console.log("You are a child!");
}

// With booleans you can just place them directly as the logic
let online = true;
if (online) {
	console.log("You are online!");
} else {
	console.log("You are offline!");
}
	

/*
	CHECKED PROPERTY & LOGIC ===================================================================================================
*/
// When we click on the button, see if the checkbox is checked or not
document.getElementById("myButton2").onclick = function() {
	// Can store elements within a variable for readability
	const myCheckbox = document.getElementById("myCheckbox");
	const visaBtn = document.getElementById("visaBtn");
	const mastercardBtn = document.getElementById("mastercardBtn");
	const paypalBtn = document.getElementById("paypalBtn");

	if (myCheckbox.checked) {
		console.log("You are subscribed!");
	} else {
		console.log("You are not subscribed!");
	}

	if (visaBtn.checked) {
		console.log("You are paying with a Visa!");
	} else if (mastercardBtn.checked) {
		console.log("You are paying with a MasterCard!");
	} else if (paypalBtn.checked) {
		console.log("You are paying with PayPal!");
	} else {
		console.log("You must select a payment type!");
	}
}


/*
	SWITCH STATEMENTS ============================================================================================================
*/
// If you find yourself using a whole bunch of switch statements, it may actually be better to just use a switch statement.	
// You can use all the same logic compound prepositions that if statements can do (ie. x >= y, etc).
let grade = "A";

switch (grade) {
	case "A":
		console.log("You did great!");
		break;
	case "B":
		console.log("You did good!");
		break;
	case "C":
		console.log("You did okay!");
		break;
	case "D":
		console.log("You passed... barely!");
		break;
	case "F":
		console.log("You FAILED!");
		break;
	default:
		console.log(grade, "is not a letter grade!");
}
	

/*
	 AND + OR OPERATORS ============================================================================================================
*/
// With && both conditions must be true (allows you to check more than 1 condition)
// With || either condition can be true 
// Theres also the ! (NOT) logical operator
let temp = 15;
if (temp > 0 && temp < 30) {
	console.log("The weather is good!");
} else {
	console.log("The weather is bad!");
}
if (temp <= 0 || temp >= 30) {
	console.log("The weather is good!");
} else {
	console.log("The weather is bad!");
}


/*
	 WHILE LOOPS =================================================================================================================
*/
let userName4 = "";
// Wont let you hit okay on the prompt unless you type something in
while (userName4 == "" || userName4 == null) {
	userName4 = window.prompt("Enter your name");
}
	

/*
	 DO WHILE LOOPS =================================================================================================================
*/
let userName5 = "";
do {
	userName5 = window.prompt("Enter your name for the do while loop!");
} while (userName5 == "");

	
/*
	 FOR LOOPS =======================================================================================================================
*/
// Self explainatory from previous experience
// For loop are more suitable if you need to exectue code a *certain* amount of times
// Counter is a local variable - does NOT exist outside the for loop
// unless you first declare it outside the loop
for (let counter = 1; counter <= 10; counter++) {
	console.log(counter);
}


/*
	 BREAK AND CONTINUE =================================================================================================================
*/
// break - breaks out of a loop entirely
// continue - skips an iteration of a loop
for (let i = 1; i <= 20; i++) {
	if (i == 10) {
		continue; // Skips that specific iteration of a loop
	}
	if (i == 13) {
		break; // Breaks out of a loop completely
	}
	console.log(i);
}


/*
	 FUNCTIONS ===========================================================================================================================
*/
// 1. delcare the function (function name())
// Functions have access to global variables.
// Global variables are variables declared outside any set of curly braces or functions
// Functions can return values as well using a return statement
// They can only return 1 value.
// *** Functions always return, even when you dont write out a return statement, they return undefined by default.
	// Undefined is a built-in JS value which means no value specified
// Functions break the top-to-bottom flow of code execution, as javascript has to jump into a function, execute the
// function, then jump out of the function where it was
let number1;

number1 = startProgram();

// In programming, Scope is the context in which values are visible or can be referenced.
// Functions can access the global scope and change the values.
// Making functions dependent on global variables make those functions and variables harder to use, keep track of, or reuse elsewhere.
// Function comments and descriptions (this is similar to how java does it), this uses JSDoc Comments, and an generate HTML files

/**
 * [A short description of the function]
 * @returns {[return type] [documents the function's return value]}
 */
function startProgram() {
	let userName = "Christian";
	happyBirthday(userName);
	return 10; // return statement, causes the JS engine to exit the function immediately
}

// Browser reads the function into memory and is now prepared to act on its instructions as soon as its called.
// Can add parameters to your function declaration to have functions take in arguments passed in.
	// parameters are variables in which the function stores information passed to it.
	// arguments are values that you pass to a function when you call the function.
function happyBirthday(userName) {
	console.log("Happy birthday", userName.trim(), "im a function!");
}

console.log(number1);

/**
* Returns a random number between two  
* @param {number} upper - The highest number value.
* @param {number} lower - The lowest number value.
* @return {number} The random number value. 
*/
const randValWithBounds = (upper = 100, lower = 1) => {
	// isNaN - special function that return a boolean value 
	if (isNaN(upper) || isNaN(lower)) {
		// JS lets you create your own errors that prints to the JS console
		// throw keyword followed by JS Error object...
		throw Error("Both arguments must be numbers!");
	}
	const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
	return randomNumber;
};

/*
	 FUNCTION EXPRESSIONS ===============================================================================================================
*/
// This lets you assign a function to a variable
// This function can be rewritten
function getRandomNumber(upper) {
	const randomNumber = Math.floor(Math.random() * upper) + 1;
	return randomNumber;
}
// As:
const getRandomNumber2 = function (upper) {
	const randomNumber = Math.floor(Math.random() * upper) + 1;
	return randomNumber;
};
// This is known as an Anonymous Function as it has no name, instead the name comes from the variable
// You store the function as a vaule in the variable
console.log(`Anon function value ${getRandomNumber2(10)}...`);

// Differences between function declarations and function expressions:
// declarations load before any JS code is executed, so their calls can be before their declaration statement.
// When the JS file loads, the JS engine behind the scene moves all function declarations to the top of their current scope.
// This is known as hoisting.
// Function expressions dont have this feature, so you can't call it before its initialized.
// These approaches are personal preference.


/* TERNARY OPERATOR ===================================================================================================================== */
// condition ? expression if true : expression if false
console.log(5 > 10 ? "10 is greater than 5" : "5 is not greater than 10");


/*
	 ARROW FUNCTION EXPRESSIONS ==========================================================================================================
*/
// Basic syntax: const square = (x) => {return x*x;};
// Omit the function keyword.
// => is the arrow token.
// Arrow function are still anonymous functions
// These behave mostly like function expressions and are not hoisted to the top of the scope by the JS engine.
const getRandomNumber3 = (upper) => {
	const randomNumber = Math.floor(Math.random() * upper) + 1;
	return randomNumber;
};


/*
	 CONSISE ARROW FUNCTION EXPRESSIONS ==================================================================================================
*/
// If the function accepts only 1 argument, you can omit the parenthesis...
	// Example: const square = x => {return x*x;}
// You cant remove parenthesis from arrow function requiring no or multiple arguments. Only single arguments.

// If the function body is only 1 line of code, you can omit the return keyword and the curly braces...
	// Example: const square = x => x * x;
// This is called an implicit return - returned automatically.

// Can implicity return larger functions multiline 
	// Example: const square = (x) => (
		// x * x;
	//);

// Single-line functions with No parameters
// A single-ling arrow function with no parameters requires parenthesis before the arrow token or youll get an error
	// Example: const greeting = () => alert("Hello!");


/*
	 DEFAULT FUNCTION PARAMETERS ==================================================================================================
*/
// Can write this as an arrow expression as well...
function sayGreeting(name = "Student") {
	return `Good morning, ${name}!`;
}

// Note, if you have two default parameters and you only want to pass in 1 name argument, you have to
// pass in undefined for the first parameter or youll get an error.
// Everything but the last argument requires undefined...
function sayGreeting2(greeting = "Morning", name = "Student") {
	return `${greeting}, ${name}!`;
}


/*
	 LET VS VAR SCOPES =====================================================================================================================
*/
// This is an important unit
// let is limited to block scope {}
// var is limited to a function() {}
// If you decalre a global variable with var, it can mess with your browser properties (not good!)


/*
	 TEMPLATE LITERALS =====================================================================================================================
*/
// basically like C's printf or javas System.out.printf, except here its with back ticks and ${}
// can use this to assign variables too
// This is especially useful when updating html elements
let userName6 = "Bob";
let items = 3;
let total = 75;

console.log(`Hello ${userName6}, you have ${items} in your cart for a total of $${total}`);


/*
	 TOLOCALESTRING ========================================================================================================================
*/
// 2 arguments: 1. locale - language, if undefined becames set as browsers default; 2. options - formatting options
// NUMBERS
let myNum = 123456.789;
myNum = myNum.toLocaleString("en-US"); // US English - prints 123,456.789
console.log(myNum);
myNum = myNum.toLocaleString("hi-IN"); // Does NOT convert to hindi because it was already converted to english
let myNum2 = 123456.789;
myNum2 = myNum2.toLocaleString("hi-IN"); // Hindi
console.log(myNum2); // Hindi - prints 1,23,456.789
let myNum3 = 123456.789;
myNum3 = myNum3.toLocaleString("de-DE"); // German
console.log(myNum3); // German - prints 123.456,789

// CURRENCY
let myNum4 = 100.355;
myNum4 = myNum4.toLocaleString("en-US", {style: "currency", currency: "USD"}); // Rounds to dollars and cents US dollars
console.log(myNum4);
let myNum5 = 100.355;
myNum5 = myNum5.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // Rounds - hindi currency
console.log(myNum5);

// PERCENTS
let myNum6 = 0.5; // 50%
myNum6 = myNum6.toLocaleString(undefined, {style: "percent"}); // print as percentile
console.log(myNum6);

// UNITS - celsius, km, miles, F, etc
let myNum7 = 100;
myNum7 = myNum7.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // print with degree symbol
console.log(myNum7);


/*
	 ARRAYS =================================================================================================================================
*/
let fruits = ["apple", "orange", "banana"];
console.log(fruits);
fruits[2] = "coconut";
console.log(fruits);
fruits.push("lemon"); // add an element
console.log(fruits);
fruits.pop(); // remove last element
console.log(fruits);
fruits.unshift("mango"); // add element to beginning
console.log(fruits);
fruits.shift(); // removes element from beginning 
console.log(fruits);

let len_array = fruits.length;
let index_array = fruits.indexOf("apple"); // returns an index of -1 if not found!
console.log(len_array);
console.log(index_array);





