// Exercise 7:
// Create a program that calculates and displays the area of a circle, prompting the user for the radius (S = PI * radius^2)

let radius = parseFloat(prompt("Input the radius: "));

let area = Math.PI * Math.pow(radius, 2);

console.log(
  `The area of a circle with ${radius} radius is: ${area.toFixed(2)}`
);
