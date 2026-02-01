/*
Binary Logical Operators

Logical AND (&&) Operator: This operator checks if both operands are truthy. If the first value is truthy, then it will return the second value. If the first value is falsy, then it will return the first value.
*/

const result = true && 'hello';

console.log(result); // hello

/*
Logical OR (||) Operator: This operator checks if at least one of the operands is truthy. If the first value is truthy, then it is returned. 
If the first value is falsy, then the second value is returned.
Nullish Coalescing (??) Operator: This operator will return a value only if the first one is null or undefined.
*/

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
