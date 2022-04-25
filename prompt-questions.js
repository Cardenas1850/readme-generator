const fs = require('fs');
const inquirer = require('inquirer');
const createReadme = require('./assets/js/generateReadMe');

inquirer
    .prompt([{
            name: "username",
            type: "input",
            message: "What is your github username?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }
        },

        {
            name: "email",
            type: "input",
            message: "What is your email address?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }

        },

        {
            name: "title",
            type: "input",
            message: "What is the title of the project?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("please enter a response");
                }
                return true;
            }
        },

        {
            name: "description",
            type: "input",
            message: "What is the description of the project?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }
        },

        {
            name: "installation",
            type: "input",
            message: "What are the installation instructions for the project?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }
        },
        {
            name: "usage",
            type: "input",
            message: "What is the intended purpose of the project",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }
        },
        {
            name: "contribution",
            type: "input",
            message: "Who contributed to the project",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }

        },
        {
            name: "testing",
            tpye: "input",
            message: "test message",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a response");
                }
                return true;
            }
        }
    ])
    .then((answer) => {
        console.log(answer);
    });
s