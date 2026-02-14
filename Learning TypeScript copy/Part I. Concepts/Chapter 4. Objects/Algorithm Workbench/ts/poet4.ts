type Poet = {
    born: number;
    name: string;
}

// Ok: all fields match what's expected in Poet
const poetMatch: Poet = {
  born: 1928,
  name: "Maya Angelou"
};

const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};
