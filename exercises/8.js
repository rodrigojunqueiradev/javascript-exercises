// Exercise 8:
// Write a program that calculates the quadratic equation, prompting the user for the constants.
// Quadratic equation > ax^2 + bx + c = 0
// Quadratic equation solving formula > x = (-b +/- sqrt(b*2 - 4 * a * c))/(2*a)

const a = parseFloat(prompt("Input the 'a': "));
const b = parseFloat(prompt("Input the 'b': "));
const c = parseFloat(prompt("Input the 'c': "));

const discriminant = Math.pow(b, 2) - 4 * a * c;

if (discriminant > 0) {
  console.log("discriminant > 0, so: ");
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Root 1: ${root1.toFixed(2)} and Root 2: ${root2.toFixed(2)}`);
} else if (discriminant === 0) {
  console.log("discriminant = 0, so: ");
  const root = -b / (2 * a);
  console.log(`Root: ${root.toFixed(2)}`);
} else if (discriminant < 0) {
  console.log("There are no real roots.");
}

// Try these examples:
// For discriminant > 0 -> a = 1, b = -5, c = 6
// For discriminant = 0 -> a = 1, b = -4, c = 4
// For discriminant < 0 -> a = 1, b = 2, c = 5
