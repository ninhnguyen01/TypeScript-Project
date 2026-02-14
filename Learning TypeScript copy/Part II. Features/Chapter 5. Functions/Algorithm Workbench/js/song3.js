function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok
