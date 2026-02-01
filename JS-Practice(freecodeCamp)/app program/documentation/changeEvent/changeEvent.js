// The Change Event
// Definition: The change event is a special event which is fired when the user modifies the value of certain input elements. 

const selectEl = document.querySelector(".language");
const result = document.querySelector(".result");

selectEl.addEventListener("change", (e) => {
  result.textContent = `You enjoy programming in ${e.target.value}.`;
});
