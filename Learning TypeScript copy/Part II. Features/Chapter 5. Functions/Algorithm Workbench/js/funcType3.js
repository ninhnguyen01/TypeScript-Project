function getSongRecordingDate(song) {
    switch (song) {
        case "Strange Fruit":
            return new Date('April 20, 1939'); // Ok
        case "Greensleeves":
            return "unknown";
        default:
            return undefined; // Ok
    }
}
