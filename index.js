const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")

const questions = [{
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your title of your repo?",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "How should you install this project?",
    name: "installation"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "Why did you decide to create this project?",
    name: "motivation",
    default: "Homework assignment"
  },
];

// generateMarkdown();

function init() {
  inquirer.prompt(questions).then(function (answers) {
      console.log(answers);
      api.getUser(answers.username).then(function ({data}) {
          fs.writeFile("READMEGen.md", generateMarkdown({...answers, ...data}), (err) => {
            if (err) throw err;
          });
        });
  });
};

init();