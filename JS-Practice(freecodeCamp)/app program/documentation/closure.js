/*
Closures

Definition: A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.
*/

function outerFunction(x) {
  let y = 10;
  function innerFunction() {
    console.log(x + y);
  }
  return innerFunction;
}

let closure = outerFunction(5);
closure(); // 15
