/*
Symbol: The Symbol data type is a unique and immutable value that may be used as an identifier for object propertie
*/ 
const crypticKey1= Symbol('saltNpepper');
const crypticKey2= Symbol('saltNpepper');
console.log(crypticKey1 === crypticKey2);