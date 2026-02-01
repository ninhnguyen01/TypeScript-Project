let userInput = "   Hello World!   "
let cleanedInput = userInput.trim()
let trimmedStart = userInput.trimStart()
let trimmedEnd = userInput.trimEnd()
let upperCaseInput = cleanedInput.toUpperCase()
let lowerCaseInput = cleanedInput.toLowerCase()
let lowercaseWord = "camelcase"
let camelCasedVersion = lowercaseWord.slice(0,5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3)

console.log("Original input:")
console.log(userInput)

console.log("Result of trimming whitespace from both ends:")
console.log(cleanedInput)

console.log("After using the trimStart() method — leading spaces removed:")
console.log(trimmedStart)

console.log("After using the trimEnd() method — trailing spaces removed:")
console.log(trimmedEnd)

console.log("Result of using the toUpperCase() method:")
console.log(upperCaseInput)

console.log("Result of using the toLowerCase() method:")
console.log(lowerCaseInput)

console.log("Camel cased version:")
console.log(camelCasedVersion)