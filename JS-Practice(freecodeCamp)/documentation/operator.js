/*
Operator Precedence

Definition: Operator precedence determines the order in which operations are evaluated in an expression. 
Operators with higher precedence are evaluated before those with lower precedence. 
Values inside the parenthesis will be evaluated first and multiplication/division will have higher precedence than addition/subtraction. 
If the operators have the same precedence, then JavaScript will use associativity. 
Associativity is what tells JavaScript whether to evaluate operators from left to right or right to left
*/

const result = (2 + 3) * 4;

console.log(result); // 20

const result2 = 10 - 2 + 3;

console.log(result2); // 11

const result3 = 2 ** 3 ** 2;

console.log(result3); // 512
