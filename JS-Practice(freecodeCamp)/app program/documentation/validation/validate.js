// Constraint Validation API: Certain HTML elements, such as the textarea and input elements, expose a constraint validation API. This API allows you to assert that the user's provided value for that element passes any HTML-level validation you have written, such as minimum length or pattern matching.
// checkValidity() method: This method returns true if the element matches all HTML validation (based on its attributes), and false if it fails.
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.setCustomValidity("You must use a .com email.")
  }
})

// reportValidity() Method: This method tells the browser that the input is invalid.
const input2 = document.querySelector("input");

input2.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
  }
})

// validity Property: This property is used to get or set the validity state of form controls (like <input>, <select>, etc.) and provides information about whether the user input meets the constraints defined for that element (e.g., required fields, pattern constraints, maximum length, etc.).
const input3 = document.querySelector("input");

input3.addEventListener("input", (e) => {
  console.log(e.target.validity);
})

// patternMismatch Property: This will be true if the value doesn't match the specified regular expression pattern.
