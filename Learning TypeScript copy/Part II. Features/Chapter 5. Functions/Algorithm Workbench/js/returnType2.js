// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs, index) {
    return index < songs.length
        ? songs[index]
        : undefined;
}
