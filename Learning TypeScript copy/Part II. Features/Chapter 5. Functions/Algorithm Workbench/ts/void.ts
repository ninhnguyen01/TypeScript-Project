// For example, this songLogger variable represents a function that takes in a song: string and doesn’t return a value:

let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`);
};

songLogger("Heart of Glass"); // Ok
