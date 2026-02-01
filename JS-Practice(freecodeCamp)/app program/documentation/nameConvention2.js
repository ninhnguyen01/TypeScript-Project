/*
Best Practices for Naming Variables and Functions

camelCasing: By convention, JavaScript developers will use camel casing for naming variables and functions. 
Camel casing is where the first word is all lowercase and the following words start with a capital letter. Ex. isLoading.

Naming Booleans: For boolean variables, it's a common practice to use prefixes such as "is", "has", or "can".
*/

let isLoading = true;
let hasPermission = false;
let canEdit = true;

/*
Naming Functions: For functions, the name should clearly indicate what the function does. 
For functions that return a boolean (often called predicates), you can use the same "is", "has", or "can" prefixes. 
When you have functions that retrieve data, it is common to start with the word "get". 
When you have functions that set data, it is common to start with the word "set". 
For event handler functions, you might prefix with "handle" or suffix with "Handler".
*/

function getUserData() { /* ... */ }

function isValidEmail(email) { /* ... */ }

function getProductDetails(productId) { /* ... */ }

function setUserPreferences(preferences) { /* ... */ }

function handleClick() { /* ... */ }

/*
Naming Variables Inside Loops: When naming iterator variables in loops, it's common to use single letters like i, j, or k.
*/

for (let i = 0; i < array.length; i++) { /* ... */ }
