/*
Comparisons and the null and undefined Data Types

Comparisons and undefined: A variable is undefined when it has been declared but hasn't been assigned a value. 
It's the default value of uninitialized variables and function parameters that weren't provided an argument. 
undefined converts to NaN in numeric contexts, which makes all numeric comparisons with undefined return false.
*/

console.log(undefined < 0); // false (NaN < 0 is false)
console.log(undefined >= 0); // false (NaN >= 0 is false)

/*
Comparisons and null: The null type represents the intentional absence of a value. 
null converts to 0 in numeric contexts, which may result in unexpected behavior in numeric comparisions:
*/

console.log(null < 0); // false (0 < 0 is false)
console.log(null >= 0); // true (0 >= 0 is true)

// When using the equality operator (==), null and undefined only equal each other and themselves:

console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == NaN); // false

// However, when using the strict equality operator (===), which checks both value and type without performing type coercion, null and undefined are not equal:

console.log(null === undefined); // false
