/*
var Keyword and Hoisting

Definition: var was the original way to declare variables before 2015. But there were some issues that came with var in terms of scope, redeclaration and more. 
So that is why modern JavaScript programming uses let and const instead.
Redeclaring Variables with var: If you try to redeclare a variable using let, then you would get a SyntaxError. But with var, you are allowed to redeclare a variable.
*/

// Uncaught SyntaxError: Identifier 'num' has already been declared 
// let num = 19;
// let num = 18;

var myNum = 5;
var myNum = 10; // This is allowed and doesn't throw an error

console.log(myNum) // 10

/*
var and Scope: Variables declared with var inside a block (like an if statement or a for loop) are still accessible outside that block.
*/

if (true) {
  var num = 5;
}
console.log(num); // 5

/*
Hoisting: This is JavaScript's default behavior of moving declarations to the top of their respective scopes during the compilation phase before the code is executed. 
When you declare a variable using the var keyword, JavaScript hoists the declaration to the top of its scope.
*/

console.log(num2); // undefined
var num2 = 5;
console.log(num2); // 5

/*
When you declare a function using the function declaration syntax, both the function name and the function body are hoisted. 
This means you can call a function before you've declared it in your code.
*/

sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

/*
Variable declarations made with let or const are hoisted, but they are not initialized, and you can't access them before the actual declaration in your code. 
This behavior is often referred to as the "temporal dead zone".
*/
// console.log(num3); // Throws a ReferenceError
// let num3 = 10;
