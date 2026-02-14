// Type: (songs: string[]) => number
function singSongs(songs) {
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        console.log("".concat(song));
    }
    return songs.length;
}
