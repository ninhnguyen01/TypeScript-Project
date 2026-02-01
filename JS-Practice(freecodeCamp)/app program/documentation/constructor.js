/*
String Constructor and toString() Method

Definition: A string object is used to represent a sequence of characters. 
String objects are created using the String constructor function, which wraps the primitive value in an object.
*/

const greetingObject = new String("Hello, world!");

console.log(typeof greetingObject); // "object"

/*
toString() Method: This method converts a value to its string representation. 
It is a method you can use for numbers, booleans, arrays, and objects.
*/

const num = 10;
console.log(num.toString()); // "10"

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

/*
This method accepts an optional radix which is a number from 2 to 36. 
This radix represents the base, such as base 2 for binary or base 8 for octal. 
If the radix is not specified, it defaults to base 10, which is decimal.
*/
const num2 = 10;
console.log(num2.toString(2)); // "1010"(binary)

/*
Number Constructor

Definition: The Number constructor is used to create a number object. 
The number object contains a few helpful properties and methods like the isNaN and toFixed method. 
Most of the time, you will be using the Number constructor to convert other data types to the number data type.
*/
const myNum = new Number("34");
console.log(typeof myNum); // "object"

const num3 = Number('100');
console.log(num3); // 100

console.log(typeof num3); // number
