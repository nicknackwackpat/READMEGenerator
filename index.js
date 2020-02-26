const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "project"
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "project",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "What command should be run to install dependecies?",
        name: "dependecies",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about running the repo?",
        name: "runRepo",
    },
  ])