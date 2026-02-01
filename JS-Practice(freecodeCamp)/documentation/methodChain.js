/*
Method Chaining

Definition: Method chaining is a programming technique that allows you to call multiple methods on the same object in a single line of code. 
This technique can make your code more readable and concise, especially when performing a series of operations on the same object.
*/

const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
