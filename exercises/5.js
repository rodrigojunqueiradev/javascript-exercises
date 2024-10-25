// Exercise 5:
// Write a program that calculates the BMI of a person. (BMI = weight (kg) / height (m)^2)

let name = prompt("Whats your name? ");
let weight = parseFloat(prompt("Whats your weight? "));
let height = parseFloat(prompt("Whats your height? "));

let bmi = weight / height ** 2;

console.log(`${name} BMI = ${bmi.toFixed(2)}`);

if (bmi < 18.5) {
  console.log("You're Underweight condition.");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("You're Normal weight condition.");
} else if (bmi >= 25 && bmi < 30) {
  console.log("You're Overweight condition.");
} else if (bmi >= 30 && bmi < 35) {
  console.log("You're Obesity Class I condition");
} else if (bmi >= 35 && bmi < 40) {
  console.log("You're Obesity Class II condition");
} else {
  console.log("You're Obesity Class III (severe obesity) condition.");
}

// console.log(
//   "Here is a breakdown of the BMI result categories according to the World Health Organization"
// );
// console.log("Underweight: BMI less than 18.5");
// console.log("Normal weight: BMI between 18.5 and 24.9");
// console.log("Overweight: BMI between 25 and 29.9");
// console.log("Obesity Class I: BMI between 30 and 34.9");
// console.log("Obesity Class II: BMI between 35 and 39.9");
// console.log("Obesity Class III (severe obesity): BMI 40 and above");
