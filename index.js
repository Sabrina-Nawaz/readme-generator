// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { input } = require('answers');
// TODO: Create an array of questions for user input
inquirer
    .prompt
const questions = ([
    {
        //Project title
        type: "input",
        message: "What is your project named?",
        name: "name",
    },
    {
        //Enter description of your project
        type: "input",
        message: "How would you describe your project?",
        name: "description",
    },
    {
        //Enter installation instructions
        type: "input",
        message: "How do you install your project?",
        name: "installation",
    },
    {
        //Enter usage information 
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        //Contribution guidelines 
        type: "input",
        message: "Are there any contribution guidelines?",
        name: "contribution",
    },
    {
        //Test instructions 
        type: "input",
        message: "How do you test your project?",
        name: "test",
    },
]
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
