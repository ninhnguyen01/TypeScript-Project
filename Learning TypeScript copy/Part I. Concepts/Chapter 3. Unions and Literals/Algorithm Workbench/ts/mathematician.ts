// define variable
let mathematician = Math.random() > 0.5
    ? undefined
    : "Mark Goldberg";

// debug check
console.log(mathematician)

let mathematician2: string;

mathematician2 = "Mark Goldberg";

// debug check
console.log(mathematician2.length); // Ok
console.log(mathematician2)
