let originalString = "I love cats."
let replacedString = originalString.replace("cats", "dogs")
let exampleSentence = "I love cats and cats are so much fun!"
let dogsOnlySentence = exampleSentence.replace("cats", "dogs")
let dogsOnlySentence2 = exampleSentence.replaceAll("cats", "dogs")
let learningSentence = "I love learning!"
let repeatedLove = "love ".repeat(3).trimEnd()
let newSentence = "I " + repeatedLove + " learning."

console.log("Original string:")
console.log(originalString)

console.log("After using the replace() method:")
console.log(replacedString)

console.log("Original sentence:")
console.log(exampleSentence)

console.log("Replacing all occurrences of cats with dogs:")
console.log(dogsOnlySentence)

console.log("Original learning sentence:")
console.log(learningSentence)

console.log(repeatedLove)

console.log(newSentence)