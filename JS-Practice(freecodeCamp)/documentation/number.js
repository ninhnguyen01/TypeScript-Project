// Working with the Number Data Type

/*
Definition: JavaScript's Number type includes integers, floating-point numbers, Infinity and NaN. 
Floating-point numbers are numbers with a decimal point. 
Positive Infinity is a number greater than any other number while -Infinity is a number smaller than any other number. 
NaN (Not a Number) represents an invalid numeric value like the string "Jessica".
*/

/* Common Arithmetic Operations

    Addition Operator: This operator (+) is used to calculate the sum of two or more numbers.
    Subtraction Operator: This operator (-) is used to calculate the difference between two numbers.
    Multiplication Operator: This operator (*) is used to calculate the product of two or more numbers.
    Division Operator: This operator (/) is used to calculate the quotient between two numbers
    Division By Zero: If you try to divide by zero, JavaScript will return Infinity.
    Remainder Operator: This operator(%) returns the remainder of a division.
    Exponentiation Operator: This operator (**) raises one number to the power of another.
*/

// Calculations with Numbers and Strings

/*
Explanation: When you use the + operator with a number and a string, JavaScript will coerce the number into a string and concatenate the two values. 
When you use the -, * or / operators with a string and number, JavaScript will coerce the string into a number and the result will be a number. 
For null and undefined, JavaScript treats null as 0 and undefined as NaN in mathematical operations.
*/

const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
