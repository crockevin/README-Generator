// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of that project',
    name: 'name',
    validate: input => (input.trim() === '') ? 'This answer is required, Please enter the title of your project!!' : true
},
{
    type: 'input',
    message: 'Give a description of your project',
    name: 'desc'
},
{
    type: 'input',
    message: 'What needs to be installed to get this app to run',
    name: 'install'
},
{
    type: 'input',
    message: 'How do you use this app',
    name: 'usage'
},
{
    type: 'list',
    message: 'Which license are you using',
    choices: ['MIT', 'Apache', 'Mozilla Public license', 'GNU general public license v3.0', 'BDS 3-clause license'],
    name: 'license'
},
{
    type: 'input',
    message: 'Who else worked on this project',
    name: 'cont'
},
{
    type: 'input',
    message: 'How would you test your app',
    name: 'test'
},
{
    type: 'input',
    message: 'What is your Github username',
    name: 'username',
    validate: input => (input.trim() === '') ? 'This answer is required, Please enter the title of your project!!' : true
},
{
    type: 'input',
    message: 'What is your email',
    name: 'email',
    validate: input => (!input.includes('@'))? 'Not a valid email' : true
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if(err){
            console.log(err)
        } else {
            console.log('file made')
        }
        
    })
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        const fileName = 'README.md'
        const data = generateMarkdown(answers)
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
