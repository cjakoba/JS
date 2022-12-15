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


