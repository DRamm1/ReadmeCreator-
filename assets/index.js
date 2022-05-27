/* This is importing the required packages for the application. */
const fs = require("fs"); 
const inquirer = require("inquirer"); 

const generateMarkdown = require('./utils/generateMarkdown');



/**
 * The questions function is a series of prompts that will be used to generate the README.md file.
 * @param data - {
 * @returns An array of objects.
 */
const questions = (data) => {
    return inquirer.prompt([
        { 
            type: "input",
            message: "What is your username on GitHub?",
            name: "username",
            default: "DRamm1",
            validate: function (answer) {
                if (!answer) {
                    return console.log("Please provide username!");
                }
                return true;
            }
        },
        { 
            type: "input",
            message: "What would you like to name the project?",
            name: "title",
            validate: function (answer) {
                if (!answer) {
                    return console.log("Please give a project title.");
                }
                return true;
            }
        },
        { 
            type: "input",
            message: "Please input your email address",
            name: "email",
            default: "user@gmail.com",
            validate: function (answer) {
                if (!answer) {
                    return console.log("Please give your email contact. ");
                }
                return true;
            }
        },
        { 
            
            type: "input",
            message: "Please provide a description.",
            name: "description",
        },
        { 
            type: "input",
            message: "Please provide additional instructions.",
            default: "Create fast README.md files for your github projects",
            name: "usage"
        },
        {   
            type: "input",
            name: "contributions",
            message: "Who contributed to this project?",
        },
        { 
            type: "list",
            message: "What license would you like to use if any?.",
            choices: ["MIT", "Eclipse", "GNU", "IBM", "Mozilla"],
            default: "",
            name: "license"
        }
    ]);
}


/* Writing the data to the README.md file. */
questions()
        .then(data => { 
        const readMe = generateMarkdown(data)
        fs.writeFile("./dist/README.md", readMe, err => {
            if (err)
                throw new Error(err);
            console.log("Successfully wrote to README.md")
        })
    });
