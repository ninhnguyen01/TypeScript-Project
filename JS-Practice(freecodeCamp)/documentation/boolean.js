/*
Booleans and Equality

Boolean Definition: A boolean is a data type that can only have two values: true or false.
Equality (==) Operator: This operator uses type coercion before checking if the values are equal.
*/

console.log(5 == '5'); // true

/*
Strict Equality (===) Operator: This operator does not perform type coercion and checks if both the types and values are equal.
*/

console.log(5 === '5'); // false

/*
Inequality (!=) Operator: This operator uses type coercion before checking if the values are not equal.
Strict Inequality (!==) Operator: This operator does not perform type coercion and checks if both the types and values are not equal.
*/

/*
Comparison Operators

Greater Than (>) Operator: This operator checks if the value on the left is greater than the one on the right.
Greater Than (>=) or Equal Operator: This operator checks if the value on the left is greater than or equal to the one on the right.
Less Than (<) Operator: This operator checks if the value on the left is less than the one on the right.
Less Than (<=) or Equal Operator: This operator checks if the value on the left is less than or equal to the one on the right.
*/

/*
Unary Operators

Unary Plus Operator: This operator converts its operand into a number. 
If the operand is already a number, it remains unchanged.
*/

const str = '42';
const num3 = +str;

console.log(num3); // 42
console.log(typeof num3); // number

// Unary Negation (-) Operator: This operator negates the operand.

const num = 4;
console.log(-num); // -4

/*
Logical NOT (!) Operator: This operator flips the boolean value of its operand. 
So, if the operand is true, it becomes false, and if it's false, it becomes true. 
*/