/*
Definition: The sort method is used to sort the elements of an array and return a reference to the sorted array. 
No copy is made in this case because the elements are sorted in place.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

/*
If you need to sort numbers, then you will need to pass in a compare function. 
The sort method converts the elements to strings and then compares their sequences of UTF-16 code units values. 
UTF-16 code units are the numeric values that represent the characters in the string. 
Examples of UTF-16 code units are the numbers 65, 66, and 67 which represent the characters "A", "B", and "C" respectively. 
So the number 200 appears before the number 3 in an array, because the string "200" comes before the string "3" when comparing their UTF-16 code units.
*/

const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]

/*
The parameters a and b are the two elements being compared. 
The compare function should return a negative value if a should come before b, a positive value if a should come after b, and zero if a and b are equal.
*/

