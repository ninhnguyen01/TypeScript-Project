// aria-expanded attribute: Used to convey the state of a toggle (or disclosure) feature to screen reader users.
// aria-haspopup attribute: This state is used to indicate that an interactive element will trigger a pop-up element when activated. You can only use the aria-haspopup attribute when the pop-up has one of the following roles: menu, listbox, tree, grid, or dialog. The value of aria-haspopup must be either one of these roles or true, which is the same as menu.
// aria-checked attribute: This attribute is used to indicate whether an element is in the checked state. It is most commonly used when creating custom checkboxes, radio buttons, switches, and listboxes.
// aria-disabled attribute: This state is used to indicate that an element is disabled only to people using assistive technologies, such as screen readers.
// aria-selected attribute: This state is used to indicate that an element is selected. You can use this state on custom controls like a tabbed interface, a listbox, or a grid.
// aria-controls attribute: Used to associate an element with another element that it controls. This helps people using assistive technologies understand the relationship between the elements.
// hidden attribute: Hides inactive panels from both visual and assistive technology users.
// aria-live attribute: Makes part of a webpage a live region, meaning any updates inside that area will be announced by a screen reader so users don't miss important changes.
// // polite value: Most live regions use this value. This value means that the update is not urgent, so the screen reader can wait until it finishes any current announcement or the user completes their current action before announcing the update.
// contenteditable attribute: Turns the element into a live editor, allowing users to update its content as if it were a text field. When there is no visible label or heading for a contenteditable region, add an accessible name using the aria-label attribute to help screen reader users understand the purpose of the editable area.

const statusEl = document.getElementById("status");
statusEl.textContent = "Your file has been successfully uploaded.";

<div contenteditable="true" aria-label="Note editor">
  Editable content goes here
</div>

// blur event: Fires when an element loses focus.
// focus event: Fires when an element receives focus.
element.addEventListener("blur", () => {
  // Handle when user leaves the element
});

element.addEventListener("focus", () => {
  // Handle when user enters the element
});