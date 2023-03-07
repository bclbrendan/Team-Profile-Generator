const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// const questions = [

//     {
//     type: 'input',
//     name: 'name',
//     message: "what is the Name",
//     },
//     {
//     type: 'input',
//     name: 'id',
//     message: "what is the ID",
//     },
//     {
//     type: 'input',
//     name: 'email',
//     message: "what is their email",
//     },
// ]


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = []
const idArray = []

const appMenu = () => {
    function addManager(){
        console.log("Enter the TEAM MANAGER's details")
        inquirer.prompt([
                {
    type: 'input',
    name: 'name',
    message: "what is the Name",
    },
    {
        type: 'input',
    name: 'id',
    message: "what is the ID",
    },
    {
    type: 'input',
    name: 'email',
    message: "what is their email",
    },
    {
    type: 'input',
    name: 'office_number',
    message: "what is their Office number",
        }
        ])
        .then((answers) => teamMembers.push(answers))
        .then(() => console.log(teamMembers))
        .catch((err) => console.error(err));
    }
    function choiceMenu(){
        console.log (" A)  Add an engineer B)  Add an intern, C) Finish building the team")
    
    }
    addManager()
    choiceMenu()
}
appMenu()
// inquirer.prompt(questions)
//     .then((answers) => writeToFile(answers.title+".md", answers))
//     .then(() => console.log('Successfully wrote to readme'))
//     .catch((err) => console.error(err));


// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
// * When a user starts the application then they are prompted to enter the **team manager**’s:
//   * Name
//   * Employee ID
//   * Email address
//   * Office number
// * When a user enters those requirements then the user is presented with a menu with the option to:
//   * Add an engineer
//   * Add an intern 
//   * Finish building the team
// * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Engineer's Name
//   * ID
//   * Email
//   * GitHub username
// * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Intern’s name
//   * ID
//   * Email
//   * School