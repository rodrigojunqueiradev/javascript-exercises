// Exercise 1:
// Write a program that asks the user for two numbers and shows (always from the first to the second number): addition, subtraction, multiplication, division and power.

// Numbers requests:
n1 = parseFloat(prompt("Type the first number: "));
n2 = parseFloat(prompt("Type the second number: "));

console.log("First number: " + n1);
console.log("Second number: " + n2);

// Calcs:
let addiction = n1 + n2;
let subtraction = n1 - n2;
let multiplication = n1 * n2;
let division = n1 / n2;
let power = n1 ** n2;

// Results:
console.log("Addction: " + addiction);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Power: " + power);
