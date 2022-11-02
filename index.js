// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown");
//TODO: Create an array of questions for user input
const questionsList = [
    {
        //Project title
        type: "input",
        message: "What is your project named?",
        name: "title",
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
        name: "tests",
    },
    {
        //Create a list of licenses  
        type: "list",
        message: "Which license was used for this project?",
        name: "license",
        choices: [
            "GPL", 
            "Mozilla Public License", 
            "MIT",  
            "Apache",
            "WTFPL", 
            "N/A"],
    },
    {
        //Enter Github username  
        type: "input",
        message: "Enter your Github username",
        name: "github",
    },
    {
        //Enter Email  
        type: "input",
        message: "Enter your GitHub email",
        name: "email",
    },
]
const askQuestions = () => inquirer.prompt(questionsList)
// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    const name = fileName.toLowerCase().split(' ').join('_')
    fs.writeFile(`./${name}.md`, content, () => {
    })
 };
// TODO: Create a function to initialize app
function init() { 
    askQuestions()
    .then(({title,...data}) => ({title, markdown: util({title,...data})}))
    .then(({title, markdown}) => writeToFile(title, markdown))
}
// Function call to initialize app
init();
