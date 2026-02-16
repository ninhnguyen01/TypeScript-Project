function logPair(name, value) {
    console.log("".concat(name, " has ").concat(value));
}
var pairTupleCorrect = ["Amage", 1];
logPair.apply(void 0, pairTupleCorrect); // Ok
