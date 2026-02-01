/*
Definition: In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the main function has finished its execution.
forEach() Method: This method is used to iterate over each element in an array and perform an operation on each element. 
The callback function in forEach can take up to three arguments: the current element, the index of the current element, and the array that forEach was called upon.
*/

const numbers = [1, 2, 3, 4, 5];

// Result: 2 4 6 8 10
numbers.forEach((number) => {
  console.log(number * 2);
});

/*
Higher Order Functions

Definition: A higher-order function takes one or more functions for the arguments and returns a function or value for the result.
*/

function operateOnArray(arr, operation) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = operateOnArray(numbers2, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/*
map() Method: This method is used to create a new array by applying a given function to each element of the original array. 
The callback function can accept up to three arguments: the current element, the index of the current element, and the array that map was called upon.
*/

const numbers3 = [1, 2, 3, 4, 5];
const doubled = numbers3.map((num) => num * 2);

console.log(numbers3); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]


/*
filter() Method: This method is used to create a new array with elements that pass a specified test, making it useful for selectively extracting items based on criteria. 
Just like the map method, the callback function for the filter method accepts the same three arguments: the current element being processed, the index, and the array.
*/

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers4.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]


/*
reduce() Method: This method is used to process an array and condense it into a single value. 
This single value can be a number, a string, an object, or even another array. 
The reduce() method works by applying a function to each element in the array, in order, passing the result of each calculation on to the next. 
This function is often called the reducer function. 
The reducer function takes two main parameters: an accumulator and the current value. 
The accumulator is where you store the running result of your operations, and the current value is the array element being processed.
*/

const numbers5 = [1, 2, 3, 4, 5];
const sum = numbers5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
