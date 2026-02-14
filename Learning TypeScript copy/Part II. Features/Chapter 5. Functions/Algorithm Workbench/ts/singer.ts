let singer: (song: string) => string;

singer = function (song) {
  // Type of song: string
  return `Singing: ${song.toUpperCase()}!`; // Ok
};
