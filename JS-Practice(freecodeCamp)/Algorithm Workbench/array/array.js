/*
--JavaScript Array Basics

Definition: A JavaScript array is an ordered collection of values, each identified by a numeric index. The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and even other arrays. Arrays are contiguous in memory, which means that all elements are stored in a single, continuous block of memory locations, allowing for efficient indexing and fast access to elements by their index.

Accessing Elements From Arrays: To access elements from an array, you will need to reference the array followed by its index number inside square brackets. JavaScript arrays are zero based indexed which means the first element is at index 0, the second element is at index 1, etc. If you try to access an index that doesn't exist for the array, then JavaScript will return undefined.

--Two Dimensional Arrays

Definition: A two-dimensional array is essentially an array of arrays. 
It's used to represent data that has a natural grid-like structure, such as a chessboard, a spreadsheet, or pixels in an image. 
To access an element in a two-dimensional array, you need two indices: one for the row and one for the column

Array Destructuring

Definition: Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way. 
It provides a convenient syntax for unpacking array elements into distinct variables.

Rest Syntax: This allows you to capture the remaining elements of an array that haven't been destructured into a new array.
*/

// an array of names
const developerType = ['frontend', 'backend', 'fullstack']

// access elements from array
console.log(developerType[0])
console.log(developerType[1])
console.log(developerType[2])

// check length of array
console.log(developerType.length)

// add element to array
developerType[3] = 'unicorn'
console.log(developerType)

// 2D arrays
const chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(chessboard[7][4]); // 'k'

// Array Destructuring
const jobType = ['farmer', 'soldier', 'politician']
const [grow, fight, govern] = jobType

console.log(grow)
console.log(fight)
console.log(govern)

// Rest operation
const squad = ['leader', 'assault', 'assault2', 'sniper']
const [co,...rest] = squad

console.log(co)
console.log(rest)

/*
Common Array Methods:

push() Method: This method is used to add elements to the end of the array and will return the new length.

pop() Method: This method is used to remove the last element from an array and will return that removed element. 
If the array is empty, then the return value will be undefined.

shift() Method: This method is used to remove the first element from an array and return that removed element. 
If the array is empty, then the return value will be undefined.

unshift() Method: This method is used to add elements to the beginning of the array and will return the new length.

indexOf() Method: This method is useful for finding the first index of a specific element within an array. 
If the element cannot be found, then it will return -1.
*/ 
const food = ['kbbq', 'hotpot', 'ramen']
console.log(food)

food.push('pho')
console.log(food)

food.pop()
console.log(food)

food.shift()
console.log(food)

food.unshift('noodles')
console.log(food)

console.log(food.indexOf('ramen'))

/*
splice() Method: This method is used to add or remove elements from any position in an array. 
The return value for the splice() method will be an array of the items removed from the array. 
If nothing was removed, then an empty array will be returned. 
This method will mutate the original array, modifying it in place rather than creating a new array. 
The 1st argument specifies the index at which to begin modifying the array. 
The 2nd argument are the number of elements you wish to remove. 
The following arguments are the elements you wish to add.
*/
food.splice(1, 1, 'rice')
console.log(food)

/*
includes() Method: This method is used to check if an array contains a specific value. 
This method returns true if the array contains the specified element, and false otherwise.
*/

console.log(food.includes('rice'))

/*
concat() Method: This method creates a new array by merging two or more arrays.
*/

const food2 = ['dumplings', 'eggrolls']
newFood = food2.concat(food)
console.log(newFood)

/*
slice() Method: This method returns a shallow copy of a portion of the array, starting from a specified index or the entire array. 
A shallow copy will copy the reference to the array instead of duplicating it.
*/
foodSample = newFood.splice(2)
console.log(foodSample)

/*
Spread operation: used to create shallow copies of an array.
*/
const newSample = [...foodSample]
newSample.push('mooncake')
console.log(newSample)

/*
split() Method: This method divides a string into an array of substrings and specifies where each split should happen based on a given separator. 
If no separator is provided, the method returns an array containing the original string as a single element.
*/
const greeting = "Hello there!"
const popCulture = greeting.split(" ")
console.log(popCulture)

/*
reverse() Method: This method reverses an array in place.
*/
console.log(popCulture.reverse())

/*
join() Method: This method concatenates all the elements of an array into a single string, with each element separated by a specified separator. 
If no separator is provided, or an empty string ("") is used, the elements will be joined without any separator.
*/
const response = ['K','e','n','o','b','i','!']
console.log(response.join(""))
