// Exercise 6:
// Create a program that calculates and displays the perimeter of a circle, prompting the user for the radius.

let radius = parseFloat(prompt("Input the radius: "));

let perimeter = 2 * Math.PI * radius;

console.log(
  `The perimeter of a circle that have ${radius} is: ${perimeter.toFixed(2)}`
);
