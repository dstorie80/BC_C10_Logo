
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./assets/js/generateHTML");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 alpha characters',
            name: 'characters',
            validate: function (value) {
                if (value.length === 3) {
                    return true;
                } else {
                    return 'Please enter 3 characters';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter a color or hex code for the text color',
            name: 'tColor',
        },
        {
            type: 'list',
            message: 'Select circle, triangle or square',
            name: 'shape',
            choices:['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter a color or hex code for shape color',
            name: 'sColor'
        },
    ])

    .then((answers) => {
        const fileContents = generateHTML(answers);
        fs.writeFile(`logo_${answers.shape}.svg`, fileContents, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Generated logo.svg`);
            }
        });
    });
