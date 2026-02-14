var singSongsRecursive = function (songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
};
