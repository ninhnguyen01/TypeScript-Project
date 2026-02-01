/*
Common Number Methods

isNaN(): NaN stands for "Not-a-Number". It's a special value that represents an unrepresentable or undefined numerical result. The isNaN() function property is used to determine whether a value is NaN or not. Number.isNaN() provides a more reliable way to check for NaN values, especially in cases where type coercion might lead to unexpected results with the global isNaN() function.
*/

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false


console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false

/*
The parseFloat() Method: This method parses a string argument and returns a floating-point number. It's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters later on.
The parseInt() Method: This method parses a string argument and returns an integer. parseInt() stops parsing at the first non-digit it encounters. For floating-point numbers, it returns only the integer part. If it can't find a valid integer at the start of the string, it returns NaN.
The toFixed() Method: This method is called on a number and takes one optional argument, which is the number of digits to appear after the decimal point. It returns a string representation of the number with the specified number of decimal places.
*/