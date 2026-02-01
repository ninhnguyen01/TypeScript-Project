/*
Conditional Statements, Truthy Values, Falsy Values and the Ternary Operator

if/else if/else: An if statement takes a condition and runs a block of code if that condition is truthy. If the condition is false, then it moves to the else if block. If none of those conditions are true, then it will execute the else clause. Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Falsy values are values that evaluate to false in a Boolean context.
*/

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got an B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

/*
Ternary Operator: This operator is often used as a shorter way to write if else statements.
*/

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`); // It's a sunny day!


