var poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
poem.name; // Ok
if ("pages" in poem) {
    poem.pages; // Ok: poem is narrowed to PoemWithPages
}
else {
    poem.rhymes; // Ok: poem is narrowed to PoemWithRhymes
}
