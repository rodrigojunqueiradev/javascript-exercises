// Exercise 4:
// Write a program that calculates and displaus the geometric mean of three numbers reported by te user.

let n1 = parseFloat(prompt("Input the number 1: "));
let n2 = parseFloat(prompt("Input the number 2: "));
let n3 = parseFloat(prompt("Input the number 3: "));

// Geometric mean

let geometricMean = Math.pow(n1 * n2 * n3, 1 / 3);
let geometricMean2 = (n1 * n2 * n3) ** (1 / 3);

console.log("Geometric Mean: " + geometricMean);
console.log("Another way to calc Geometric Mean: " + geometricMean2);
