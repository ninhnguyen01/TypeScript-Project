/*
Working with the DOM and Web APIs

API: An API (Application Programming Interface) is a set of rules and protocols that allow software applications to communicate with each other and exchange data efficiently.
Web API: Web APIs are specifically designed for web applications. These types of APIs are often divided into two main categories: browser APIs and third-party APIs.
Browser APIs: These APIs expose data from the browser. As a web developer, you can access and manipulate this data using JavaScript.
Third-Party APIs: These are not built into the browser by default. You have to retrieve their code in some way. Usually, they will have detailed documentation explaining how to use their services. 
An example is the Google Maps API, which you can use to display interactive maps on your website.
DOM: The DOM stands for Document Object Model. It's a programming interface that lets you interact with HTML documents. With the DOM, you can add, modify, or delete elements on a webpage. The root of the DOM tree is the html element. 
It's the top-level container for all the content of an HTML document. All other nodes are descendants of this root node. Then, below the root node, we find other nodes in the hierarchy. A parent node is an element that contains other elements. 
A child node is an element that is contained within another element.
navigator Interface: This provides information about the browser environment, such as the user agent string, the platform, and the version of the browser. 
A user agent string is a text string that identifies the browser and operating system being used.
window Interface: This represents the browser window that contains the DOM document. It provides methods and properties for interacting with the browser window, such as resizing the window, opening new windows, and navigating to different URLs.
*/

/*
getElementById() Method: This method is used to get an object that represents the HTML element with the specified id. 
Remember that IDs must be unique in every HTML document, so this method will only return one Element object.

querySelector() Method: This method is used to get the first element in the HTML document that matches the CSS selector passed as an argument.

querySelectorAll() Method: You can use this method to get a list of all the DOM elements that match a specific CSS selector.

innerHTML Property: This is a property of the Element that is used to set or update parts of the HTML markup.

createElement Method: This is used to create an HTML element.

innerText: This represents the visible text content of the HTML element and its descendants.

textContent: This returns the plain text content of an element, including all the text within its descendants.

appendChild() Method: This method is used to add a node to the end of the list of children of a specified parent node.

removeChild() Method: This method is used to remove a node from the DOM.
*/

/*
Work with the setAttribute Method
Definition: This method is used to set the attribute for a given element. 
If the attribute already exists, then the value is updated. Otherwise, a new attribute is added with a value.
*/

/*
Event Object

Definition: The Event object is a payload that triggers when a user interacts with your web page in some way. 
These interactions can be anything from clicking on a button or focusing an input to shaking their mobile device. 
All Event objects will have the type property. 
This property reveals the type of event that triggered the payload, such as keydown or click. 
These values will correspond to the same values you might pass to addEventListener(), where you can capture and utilize the Event object.
*/

/*
addEventListener Method: This method is used to listen for events. 
It takes two arguments: the event you want to listen for and a function that will be called when the event occurs. 
Some common examples of events would be click events, input events, and change events.

removeEventListener Method: This method is used to remove an event listener that was previously added to an element using the addEventListener method. 
This is useful when you want to stop listening for a particular event on an element.
*/

/*
Definition: The DOMContentLoaded event is fired when everything in the HTML document has been loaded and parsed. 
If you have external stylesheets or images, the DOMContentLoaded event will not wait for those to be loaded. 
It will only wait for the HTML to be loaded.
*/

/*
Element.style Property: This property is a read-only property that represents the inline style of an element. 
You can use this property to get or set the style of an element.

Element.classList Property: This property is a read-only property that can be used to add, remove, or toggle classes on an element.
*/

/*
setTimeout() Method: This method lets you delay an action for a specified time.

setInterval() Method: This method keeps running a piece of code repeatedly at a set interval. 
Since setInterval() keeps executing the provided function at the specified interval, you might want to stop it. 
For this, you have to use the clearInterval() method.
*/

/*
The requestAnimationFrame() Method

Definition: This method allows you to schedule the next step of your animation before the next screen repaint, resulting in a fluid and visually appealing experience. 
The next screen repaint refers to the moment when the browser refreshes the visual display of the web page. 
This happens multiple times per second, typically around 60 times (or 60 frames per second) on most displays.
*/

/*
Web Animations API

Definition: The Web Animations API lets you create and control animations directly inside JavaScript. 
*/

/*
The Canvas API

Definition: The Canvas API is a powerful tool that lets you manipulate graphics right inside your JavaScript file. 
To work with the Canvas API, you first need to provide a canvas element in HTML. 
This element acts as a drawing surface you can manipulate with the instance methods and properties of the interfaces in the Canvas API. 
This API has interfaces like HTMLCanvasElement, CanvasRenderingContext2D, CanvasGradient, CanvasPattern, and TextMetrics which contain methods and properties you can use to create graphics in your JavaScript file.
*/

/*
Opening and Closing Dialogs and Modals with JavaScript

Modal and Dialog Definitions: Dialogs let you display important information or actions to users. 
With the HTML built-in dialog element, you can easily create these dialogs (both modal and non-modal dialogs) in your web apps. A modal dialog is a type of dialog that forces the user to interact with it before they can access the rest of the application or webpage. 
In contrast, a non-modal dialog allows the user to continue interacting with other parts of the page or application even when the dialog is open. It doesn't prevent access to the rest of the content.
showModal() Method: This method is used to open a modal.

close() Method: This method is used to close the modal.
*/

/*
The Change Event

Definition: The change event is a special event which is fired when the user modifies the value of certain input elements. 
Examples would include when a checkbox or a radio button is ticked. Or when the user makes a selection from something like a date picker or dropdown menu.
*/