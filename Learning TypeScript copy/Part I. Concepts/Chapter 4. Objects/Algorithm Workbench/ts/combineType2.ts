type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { type: "villanelle"; }
);

// Ok
const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};

const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
};
