// The Fetch API

// The Fetch API allows web apps to make network requests, typically to retrieve or send data to the server. It provides a fetch() method that you can use to make these requests.
// You can retrieve text, images, audio, JSON, and other types of data using the Fetch API.

// HTTP methods for Fetch API

// The Fetch API supports various HTTP methods to interact with the server. The most common methods are:
// GET: Used to retrieve data from the server. By default, the Fetch API uses the GET method to retrieve data.
// To use the fetched data, it must be converted to JSON format using the .json() method:
const demo = document.getElementById("fetch")
const demo2 = document.getElementById("post")
const demo3 = document.getElementById("put")
const demo4 = document.getElementById("delete")

demo.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    // In this code, the response coming from the Fetch API is a promise and the .then handler is converting the response to a JSON format.
    .then(response => response.json())
    .then(data => console.log(data))
})

// POST: Used to send data to the server. The POST method is used to create new resources on the server.
// In this example, we're sending a POST request to create a new user. We have specified the method as POST, set the appropriate headers, and included a body with the data we want to send. The body needs to be a string, so we use JSON.stringify() to convert our object to a JSON string.
demo2.addEventListener('click', ()=>{
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
.then(response=>response.json())
.then((json)=>console.log(json))
})

// PUT: Used to update data on the server. The PUT method is used to update existing resources on the server.
demo3.addEventListener('click', ()=>{
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Smith',
    email: 'john@example.com'
  })
})
.then(response=>response.json())
.then((json)=>console.log(json))
})

// In this example, we are updating the ID 45 that is specified at the end of the URL. We have used the PUT method on the code and also specified the data as the body which will be used to update the identified data.
// DELETE: Used to delete data on the server. The DELETE method is used to delete resources on the server.
// In this example, we're sending a DELETE request to remove a user with the ID 1.
demo4.addEventListener('click', ()=>{
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Smith',
    email: 'john@example.com',
    id: 1
  })
})
.then(response=>response.json())
.then((json)=>console.log(json))
})
