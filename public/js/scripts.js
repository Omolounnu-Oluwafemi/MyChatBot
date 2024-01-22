let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');

let user = {
    message: ""
};

let arrayOfPossibleResponse = [
    { message: "Hi", response: "Hello" },
    { message: "Ok", response: "Alright" },
    { message: "How are you?" || "How are you?", response: "I'm fine, thanks" },
    { message: "What is your name?", response: "My name is NewDevChatBot!" },
  {
    message: "What is version control, and why is it important?",
    response: "Version control is a system that records changes to a file or set of files over time, allowing you to recall specific versions later. It's crucial for collaboration, tracking changes, and reverting to previous states of a project."
  },
  {
    message: "Can you explain the difference between Git and GitHub?",
    response: "Git is a distributed version control system, while GitHub is a web-based platform that provides hosting for Git repositories. Git manages the versioning, and GitHub facilitates collaboration, issue tracking, and pull requests."
  },
  {
    message: "How do you handle errors in your code?",
    response: "Error handling involves using try-catch blocks or other mechanisms to gracefully handle unexpected situations. This prevents the application from crashing and helps in identifying and resolving issues."
  },
  {
    message: "What is the purpose of the 'if' statement in programming?",
    response: "The 'if' statement is a conditional statement that allows you to execute a block of code based on a specified condition. It enables you to control the flow of your program by making decisions."
  },
  {
    message: "Explain the concept of a variable and its significance in programming.",
    response: "A variable is a named storage location in a program that holds a value. It allows you to store and manipulate data, making your code more flexible and dynamic."
  },
  {
    message: "What is the difference between frontend and backend development?",
    response: "Frontend development involves building the user interface and user experience of a website or application. Backend development focuses on server-side logic, databases, and the overall functionality that users don't see directly."
  },
  {
    message: "Describe the role of comments in code and why they are useful.",
    response: "Comments are annotations in the source code that provide information about the code but are ignored during execution. They help developers understand the code, document functionality, and improve collaboration."
  },
  {
    message: "What is the importance of data structures in programming?",
    response: "Data structures are crucial for organizing and storing data efficiently. They impact the performance of algorithms and enable developers to solve complex problems. Examples include arrays, linked lists, and trees."
  },
  {
    message: "How does Object-Oriented Programming (OOP) differ from procedural programming?",
    response: "OOP is a programming paradigm that organizes code into objects, each with its own data and methods. Procedural programming, on the other hand, focuses on procedures or routines. OOP promotes code reusability and modularity."
  },
  {
    message: "Explain the concept of inheritance in OOP.",
    response: "Inheritance is a feature in OOP that allows a class to inherit properties and methods from another class. It promotes code reuse and establishes a hierarchy among classes, with a superclass and subclasses."
  },
  {
    message: "What is the purpose of unit testing, and how do you write a basic unit test?",
    response: "Unit testing is the practice of testing individual units or components of a program in isolation. It ensures that each unit works as expected. To write a basic unit test, use testing frameworks like Jest for JavaScript or JUnit for Java."
  },
  {
    message: "What is an API, and how is it used in software development?",
    response: "An API (Application Programming Interface) is a set of rules that allows one software application to interact with another. It defines the methods and data formats for communication. APIs are crucial for building integrations and connecting different services."
  },
  {
    message: "How do you optimize the performance of a web application?",
    response: "Web application performance optimization involves various strategies such as minimizing HTTP requests, optimizing images, using asynchronous loading, and leveraging browser caching. Tools like Lighthouse can help identify performance bottlenecks."
  },
  {
    message: "Explain the concept of 'scope' in programming.",
    response: "Scope refers to the region of code where a variable is visible and can be accessed. There are global scope and local scope. Understanding scope is essential for avoiding naming conflicts and ensuring proper variable usage."
  },
  {
    message: "How do you secure sensitive information, such as API keys, in your code?",
    response: "Sensitive information, like API keys, should be stored securely. One common practice is to use environment variables to store such information. This prevents exposing sensitive data in the codebase and improves security."
  },
];



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
        let result = arrayOfPossibleResponse.filter(val => val.message.includes( userMessage || userMessage.toLowerCase() ));
        
        if (result.length > 0) { 
            let response = result[0].response;  
            chatBotMessage = response;
        } else {
            chatBotMessage = "I don't understand, Please send a different message or use Uppercase letter first";
        }
    } else {
            chatBotMessage = "I don't understand, Please send a different message or use Uppercase letter first";
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