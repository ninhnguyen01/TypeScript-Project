// variable declaration
let botName = "teacherBot";
let greeting = `My name is ${botName}.`;
let subject = "JavaScript";
let topic = "strings";
let sentence =`Today, you will learn about ${topic} in ${subject}.`;
let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`
let lastCharacter = subject[subject.length - 1];
let learningIsFunSentence = "Learning is fun.";

// print to console
console.log("Hi there!")
console.log(greeting)
console.log(sentence)
console.log(strLengthIntro)
console.log(subject.length)
console.log(`Here is an example of using the length property on the word ${topic}.`)
console.log(topic.length)
console.log(`Here is an example of accessing the first letter in the word ${subject}.`)
console.log(subject.length)
console.log(subject[0])
console.log(`Here is an example of accessing the second letter in the word ${subject}.`)
console.log(subject[1])
console.log(`Here is an example of accessing the last letter in the word ${subject}.`)
console.log(subject[subject.length - 1])
console.log(lastCharacter)
console.log("Here are examples of finding the positions of substrings in the sentence.")
console.log(learningIsFunSentence.indexOf("Learning"))
console.log(learningIsFunSentence.indexOf("fun"))
console.log(learningIsFunSentence.indexOf("learning"))
console.log("I hope you enjoyed learning today.")
