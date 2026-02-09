var researcher = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;
if (typeof researcher === "string") {
    console.log(researcher.toUpperCase()); // Ok: string
}
// Logical negations from ! and else statements work as well:
if (!(typeof researcher === "string")) {
    console.log(researcher.toFixed()); // Ok: number
}
else {
    console.log(researcher.toUpperCase()); // Ok: string
}
// a ternary statement, which is also supported for type narrowing:
typeof researcher === "string"
    ? researcher.toUpperCase() // Ok: string
    : researcher.toFixed(); // Ok: numb
