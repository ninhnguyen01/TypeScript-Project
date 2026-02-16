function logTrio(name, value) {
    console.log("".concat(name, " has ").concat(value[0], " (").concat(value[1], ")"));
}
var trios = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]]
];
trios.forEach(function (trio) { return logTrio.apply(void 0, trio); }); // Ok
