// Exercise 3:
// Write a program that calculates and displays the arithmetic mean of three grades reported by the user.

let studentName = prompt("Enter the student name: ");
let grade1 = parseFloat(prompt("Input the grade 1: "));
let grade2 = parseFloat(prompt("Input the grade 2: "));
let grade3 = parseFloat(prompt("Input the grade 3: "));

// Mean:

let mean = (grade1 + grade2 + grade3) / 3;

console.log(`${studentName} Grade 1: ${grade1}`);
console.log(`${studentName} Grade 2: ${grade2}`);
console.log(`${studentName} Grade 3: ${grade3}`);
console.log(`${studentName} Mean: ${mean}`);
