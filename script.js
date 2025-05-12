// 1) Declare variable using var. Show examples of different data types
console.log("1) Data Types Examples:");

var myString = "Hello, Nazia Mansoor Ali";      
var myNumber = 32;                              
var myBoolean = true;                     
var myObject = { name: "Nazia", age: 30 }; 
var myArray = ["Ali", "Sara", "Ahmed"];   

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Object:", myObject);
console.log("Array:", myArray);


// 2) Arithmetic operations
console.log("\n2) Arithmetic Operations:");

var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus (Remainder):", num1 % num2);

// now i am giving another example of arithmetic operations
console.log("\n2) Arithmetic Operations:");

// Example number 2 (agar user ne 10 aur 3 enter kiya)
var num1 = 10;
var num2 = 3;

console.log("Addition:", num1 + num2);       
console.log("Subtraction:", num1 - num2);     
console.log("Multiplication:", num1 * num2);   
console.log("Division:", num1 / num2);         
console.log("Modulus (Remainder):", num1 % num2); 


// 3) Check if number is positive, negative, or zero
console.log("\n3) Positive, Negative or Zero:");

var number = parseInt(prompt("Enter a number:"));

if (number > 0) {
  console.log("The number is Positive.");
} else if (number < 0) {
  console.log("The number is Negative.");
} else {
  console.log("The number is Zero.");
}


// 4) Array of 5 students and perform operations
console.log("\n4) Student Array Operations:");

var students = ["Ali", "Ahmed", "Sara", "Maya", "Zain"];

console.log("Original Array:", students);

// 5) Add a student
students.push("Bilal");
console.log("After push (Add Bilal):", students);

// Remove the last student
students.pop();
console.log("After pop (Remove last):", students);

// Sort the array
students.sort();
console.log("After sort:", students);

// Display in reverse order
students.reverse();
console.log("After reverse:", students);

