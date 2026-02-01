// preventDefault() Method

// Definition: Every event that triggers in the DOM has some sort of default behavior. The click event on a checkbox toggles the state of that checkbox, by default. Pressing the space bar on a focused button activates the button. The preventDefault() method on these Event objects stops that behavior from happening.

button.addEventListener('click', (event) => {
  // Prevent the default button click behavior  
  event.preventDefault(); 
  alert('Button click prevented!');
});
