let displayBotChat = document.getElementById("bot-chat")

function greetBot() {
    // variable declaration
    let bot;
    bot = "teacherBot";
    let botLocation = "the universe"
    let botIntroduction = "My name is " + bot + ".";
    let botLocationSentence = "I live in " + botLocation + ".";
    let botAltName = "professorBot";
    let nicknameIntroduction = "My nickname is " + botAltName + ".";
    let botchosenName = "awesomeTeacherBot";
    let newNicknameGreeting = "I love my nickname but I wish people would call me " + botchosenName + ".";
    let favoriteSubject = "Computer Science";
    let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";

    // print to console
    console.log("Hi there!")
    console.log("I am excited to talk to you.")
    console.log("Allow me to introduce myself.")

    console.log(botIntroduction)
    console.log(botLocationSentence)
    console.log(nicknameIntroduction)
    console.log(newNicknameGreeting)
    console.log(favoriteSubjectSentence)
    console.log("Well, it was nice to talk to you. Have a nice day!");
}

function displayChat() {
    displayBotChat.textContent = `Hi there! I am excited to talk to you. Allow me to introduce myself. 
    My name is teacherBot. I live in the universe. My nickname is professorBot. 
    I love my nickname but I wish people would call me awesomeTeacherBot. My favorite subject is Computer Science. 
    Well, it was nice to talk to you. Have a nice day!`
}

function closeChat() {
    displayBotChat.textContent = "Open Chat Again"
}