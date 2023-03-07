const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const questions = [

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
]


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// inquirer.prompt(questions)
//     .then((answers) => writeToFile(answers.title+".md", answers))
//     .then(() => console.log('Successfully wrote to readme'))
//     .catch((err) => console.error(err));
