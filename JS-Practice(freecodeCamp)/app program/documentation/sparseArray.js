/*
Working with Sparse Arrays

Definition: It is possible to have arrays with empty slots. 
Empty slots are defined as slots with nothing in them. 
This is different than array slots with the value of undefined. 
These types of arrays are known as sparse arrays.
*/

const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
