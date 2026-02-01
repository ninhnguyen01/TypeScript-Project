let displayBotChat = document.getElementById("bot-chat")

function triviaBot() {
    // variable declaration
    let botName = "triviaBot" ;
    let botLocation = "North America"; 
    let favoriteLanguage = "JavaScript";
    let codingFact = "Java is not related to ";

    // print to console
    console.log("Hello! I'm your coding fun fact guide!")
    console.log("My name is " + botName + " and I live in " + botLocation + ".")
    console.log("My favorite programming language is " + favoriteLanguage + ".")
    console.log(codingFact + favoriteLanguage + ".")
    console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".")
}

function displayChat() {
    displayBotChat.textContent = `Hello! I'm your coding fun fact guide! My name is triviaBot and I live in North America.
    My favorite programming language is JavaScript. Java is not related to JavaScript. It was fun sharing these facts with you. Goodbye! - triviaBot from North America.`
}

function closeChat() {
    displayBotChat.textContent = "Open Chat Again"
}