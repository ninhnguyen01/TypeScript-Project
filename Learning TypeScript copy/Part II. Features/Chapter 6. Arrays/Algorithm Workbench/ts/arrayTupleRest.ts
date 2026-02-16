function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

const pairTupleCorrect: [string, number] = ["Amage", 1];

logPair(...pairTupleCorrect); // Ok
