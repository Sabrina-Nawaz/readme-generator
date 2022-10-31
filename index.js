// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer 
.prompt
([
    {
        //Project title
        type: "input",
        message: "What is your project named?",
        name: "Title",
    },
    {
        //Enter description of your project
        type: "input",
        message: "How would you describe your project?",
        name: "Description",
    },
    {
        //Enter installation instructions
        type: "input",
        message: "How do you install your project?",
        name: "Installation",
    },
    {
        //Enter usage information 
        type: "input",
        message: "How do you use your project?",
        name: "Usage",
    },
    {
        //Contribution guidelines 
        type: "input",
        message: "Are there any contribution guidelines?",
        name: "Contribution",
    },
    {
        //Test instructions 
        type: "input",
        message: "How do you test your project?",
        name: "Tests",
    },
    {
        //Create a list of licenses  
        type: "list",
        message: "Which license was used for this project?",
        name: "License",
        choices: [
            "GPL", 
            "Mozilla Public License", 
            "MIT", 
            "GNU", 
            "Apache", 
            "N/A"],
    },
    {
        //Enter Github username  
        type: "input",
        message: "Enter your Github username",
        name: "GitHub",
    },
    {
        //Enter Github username  
        type: "input",
        message: "Enter your Github username",
        name: "GitHub",
    },
    {
        //Enter Email  
        type: "input",
        message: "Enter your GitHub email",
        name: "Email",
    },
    {
        //Enter GitHub URL  
        type: "input",
        message: "Enter your GitHub repo URL",
        name: "GitHub",
    },

])

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
