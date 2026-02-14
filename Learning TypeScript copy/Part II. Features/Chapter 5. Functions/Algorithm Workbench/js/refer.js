function usesNumberToString(numberToString) {
    console.log("The string is: ".concat(numberToString(1234)));
}
usesNumberToString(function (input) { return "".concat(input, "! Hooray!"); }); // Ok
