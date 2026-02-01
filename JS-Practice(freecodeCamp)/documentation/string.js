// Strings and String immutability in JavaScript

// Strings are sequences of characters enclosed in quotes. They can be created using single quotes and double quotes.

let correctWay = 'This is a string';
let alsoCorrect = "This is also a string";

/* 
Strings are immutable in JavaScript. This means that once a string is created, 
you cannot change the characters in the string. However, you can still reassign strings to a new value.
*/

let firstName = 'John';
firstName = 'Jane'; // Reassigning the string to a new value

// String Concatenation in JavaScript

/* 
Concatenation is the process of joining multiple strings or combining strings with variables that hold text. 
The + operator is one of the simplest and most frequently used methods to concatenate strings.
*/

let studentName = 'Asad';
let studentAge = 25;
let studentInfo = studentName + ' is ' + studentAge + ' years old.';
console.log(studentInfo); // Asad is 25 years old.

/* 
If you need to add or append to an existing string, then you can use the += operator. 
This is helpful when you want to build upon a string by adding more text to it over time.
*/

let message = 'Welcome to programming, ';
message += 'Asad!';
console.log(message); // Welcome to programming, Asad!

/* 
Another way you can concatenate strings is to use the concat() method. 
This method joins two or more strings together.
*/

let firstName2 = 'John';
let lastName2 = 'Doe';
let fullName = firstName2.concat(' ', lastName2);
console.log(fullName); // John Doe

// String Basics

/* 
Definition: A string is a sequence of characters wrapped in either single quotes, double quotes or backticks. 
Strings are primitive data types and they are immutable. 
Immutability means that once a string is created, it cannot be changed.
Accessing Characters from a String: To access a character from a string you can use bracket notation and pass in the index number. An index is the position of a character within a string, and it is zero-based.
*/

const developer = "Jessica";
console.log(developer[0]) // J


// \n (Newline Character): You can create a newline in a string by using the \n newline character.

const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

// Escaping Strings: You can escape characters in a string by placing backlashes (\) in front of the quotes.

const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

// Other Common String Methods

/* 
The indexOf Method: This method is used to search for a substring within a string. 
If the substring is found, indexOf returns the index (or position) of the first occurrence of that substring. 
If the substring is not found, indexOf returns -1, which indicates that the search was unsuccessful.
*/

const text2 = "The quick brown fox jumps over the lazy dog.";
console.log(text2.indexOf("fox")); // 16
console.log(text2.indexOf("cat")); // -1

/*
The includes() Method: This method is used to check if a string contains a specific substring. 
If the substring is found within the string, the method returns true. Otherwise, it returns false.
*/

const text3 = "The quick brown fox jumps over the lazy dog.";
console.log(text3.includes("fox")); // true
console.log(text3.includes("cat")); // false


/* 
The slice() Method: This method returns a new array containing a shallow copy of a portion of the original array, specified by start and end indices. 
The new array contains references to the same elements as the original array (not duplicates). 
This means that if the elements are primitives (like numbers or strings), the values are copied; but if the elements are objects or arrays, the references are copied, not the objects themselves.
*/

const text4 = "freeCodeCamp";
console.log(text4.slice(0, 4));  // "free"
console.log(text4.slice(4, 8));  // "Code"
console.log(text4.slice(8, 12)); // "Camp"

// The toUpperCase() Method: This method converts all the characters to uppercase letters and returns a new string with all uppercase characters.

const text5 = "Hello, world!";
console.log(text5.toUpperCase()); // "HELLO, WORLD!"

// The toLowerCase() Method: This method converts all characters in a string to lowercase.

const text6 = "HELLO, WORLD!"
console.log(text6.toLowerCase()); // "hello, world!"


/* 
The replace() Method: This method allows you to find a specified value (like a word or character) in a string and replace it with another value. 
The method returns a new string with the replacement and leaves the original unchanged because JavaScript strings are immutable.
*/

const text7 = "I like cats";
console.log(text7.replace("cats", "dogs")); // "I like dogs"

// The repeat() Method: This method is used to repeat a string a specified number of times.

const text8 = "Hello";
console.log(text8.repeat(3)); // "HelloHelloHello"

// The trim() Method: This method is used to remove whitespaces from both the beginning and the end of a string.

const text9 = "  Hello, world!  ";
console.log(text9.trim()); // "Hello, world!"

// The trimStart() Method: This method removes whitespaces from the beginning (or "start") of the string.

const text10 = "  Hello, world!  ";
console.log(text10.trimStart()); // "Hello, world!  "

// The trimEnd() Method: This method removes whitespaces from the end of the string.

const text11 = " Hello, world! ";
console.log(text11.trimEnd()); // "  Hello, world!"
