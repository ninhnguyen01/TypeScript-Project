function rateSong(song, rating) {
    if (rating === void 0) { rating = 0; }
    console.log("".concat(song, " gets ").concat(rating, "/5 stars!"));
}
rateSong("Photograph"); // Ok
rateSong("Set Fire to the Rain", 5); // Ok
rateSong("Set Fire to the Rain", undefined); // Ok
