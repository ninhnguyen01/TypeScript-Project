/*
every() Method: This method tests whether all elements in an array pass a test implemented by a provided function. 
The every() method returns true if the provided function returns true for all elements in the array. 
If any element fails the test, the method immediately returns false and stops checking the remaining elements.
*/

const numbers = [2, 4, 6, 8, 10];
const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(hasAllEvenNumbers); // true

/*
some() Method: This method checks if at least one element passes the test. 
The some() method returns true as soon as it finds an element that passes the test. 
If no elements pass the test, it returns false.
*/

const numbers2 = [1, 3, 5, 7, 8, 9];
const hasSomeEvenNumbers = numbers2.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true
