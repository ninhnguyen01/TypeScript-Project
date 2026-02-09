// Type of scientist: number | string
let scientist = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;

if (scientist === "Rosalind Franklin") {
    // Type of scientist: string
    console.log(scientist.toUpperCase()); // Ok
}
