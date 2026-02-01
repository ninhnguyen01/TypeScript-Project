// Geolocation API

//  The Geolocation API provides a way for websites to request the user's location.

//  The example below demonstrates the API's getCurrentPosition() method which is used to get the user's current location.
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  (error) => {
    console.log("Error: " + error.message);
  }
);

// In this code, we're calling getCurrentPosition and passing it a function which will be called when the position is successfully obtained.

// The position object contains a variety of information, but here we have selected latitude and longitude only.

// If there is an issue with getting the position, then the error will be logged to the console. It is important to respect the user's privacy and only request their location when necessary.
