/*
Working with Imports, Exports and Modules

Module: This is a self-contained unit of code that encapsulates related functions, classes, or variables. To create a module, you write your JavaScript code in a separate file.
Exports: Any variables, functions, or classes you want to make available to other parts of your application need to be explicitly exported using the export keyword. There are two types of export: named export and default export.
Imports: To use the exported items in another part of your application, you need to import them using the import keyword. The types can be named import, default import, and namespace import.
*/
// Within a file called math.js, we export the following functions:

// Named export
export function add(num1, num2) {
  return num1 + num2;
}

// Default export
export default function subtract(num1, num2) {
  return num1 - num2;
}

// Within another file, we can import the functions from math.js.

// Named import - This line imports the add function.
// The name of the function must exactly match the one exported from math.js.
import { add } from './math.js';

// Default import - This line imports the subtract function.
// The name of the function can be anything.
import subtractFunc from './math.js';

// Namespace import - This line imports everything from the file.
import * as Math from './math.js';

console.log(add(5, 3)); // 8
console.log(subtractFunc(5, 3)); // 2
console.log(Math.add(5, 3)); // 8
console.log(Math.subtract(5, 3)); // 2
