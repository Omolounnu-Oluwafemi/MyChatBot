let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');

let user = {
    message: ""
};

let arrayOfPossibleResponse = [
    { message: "hi", response: "Hello" },
    { message: "Hi", response: "Hello" },
    { message: "ok", response: "Alright" },
    { message: "how are you?", response: "I'm fine, thanks" },
    { message: "what is your name?", response: "My name is ChatBot!" },
]

function sendMessage(userMessage) { 
    let messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>You: </span>" + "<span>" + userMessage + "</span>"
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    chatContainer.appendChild(messageElement);
};

function chatBotResponse(userMessage) {

    let chatBotMessage = "";

    if (userMessage.length > 5 || userMessage == "hi" || userMessage == "Hi" || userMessage == "ok") { 
        let result = arrayOfPossibleResponse.filter(val => val.message.includes(userMessage.toLowerCase()));
        
        if (result.length > 0) { 
            let response = result[0].response;
            chatBotMessage = response;
        } else {
            chatBotMessage = "I don't understand, Please send a different message";
        }
    } else {
            chatBotMessage = "I don't understand, Please send a different message";
        }
    
    let messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>ChatBot: </span>" + "<span>" + chatBotMessage + "</span>"
    chatContainer.appendChild(messageElement);

   
}

sendBtn.addEventListener('click', function (e) {

    let userMessage = textbox.value;
    if (userMessage === "") {
        alert('Please type a message')
    } else { 
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";

        sendMessage(userMessage);
        chatBotResponse(userMessage);
    }

});