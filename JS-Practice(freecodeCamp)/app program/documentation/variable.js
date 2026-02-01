// Variables can be declared using the let keyword.
let cityName;

// To assign a value to a variable, you can use the assignment operator =.

cityName = 'New York';
console.log(cityName)

// Variables declared using let can be reassigned a new value.

cityName = 'Los Angeles';
console.log(cityName); // Los Angeles

/* 
Apart from let, you can also use const to declare a variable. 
However, a const variable cannot be reassigned a new value.
*/

try {
    const cityName2 = 'New York';
    cityName2 = 'Los Angeles'; // TypeError: Assignment to constant variable.
    console.log(cityName2)
}

catch {
    console.log("const variable cannot be reassigned a new value.")
}


/* 
Variables declared using const find uses in declaring constants, 
that are not allowed to change throughout the code, such as PI or MAX_SIZE.
*/
