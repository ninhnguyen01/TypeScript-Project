// Using the typeof Operator

/*
The typeof operator is used to check the data type of a variable. 
It returns a string indicating the type of the variable.
*/

let age = 25;
console.log(typeof age); // number

let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

/* 
However, there's a well-known quirk in JavaScript when it comes to null. 
The typeof operator returns object for null values.
*/

let user = null;
console.log(typeof user); // object
