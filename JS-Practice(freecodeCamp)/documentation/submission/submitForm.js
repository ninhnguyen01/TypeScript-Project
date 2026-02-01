// Submitting Forms

// Definition: There are three ways a form can be submitted. The first is when the user clicks a button in the form which has the type attribute set to submit. The second is when the user presses the Enter key on any editable input field in the form. The third is through a JavaScript call to the requestSubmit() or submit() methods of the form element.
// action Attribute: The action attribute should contain either a URL or a relative path for the current domain. This value determines where the form attempts to send data - if you do not set an action attribute, the form will send data to the current page's URL.

// method Attribute: This attribute accepts a standard HTTP method, such as GET or POST, and uses that method when making the request to the action URL. When a method is not set, the form will default to a GET request. The data in the form will be URL encoded as name=value pairs and appended to the action URL as query parameters.

// enctype Attribute: The form element accepts an enctype attribute, which represents the encoding type to use for the data. This attribute only accepts three values: application/x-www-form-urlencoded (which is the default, sending the data as a URL-encoded form body), text/plain (which sends the data in plaintext form, in name=value pairs separated by new lines), or multipart/form-data, which is specifically for handling forms with a file upload.
