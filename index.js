
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./assets/js/generateHTML");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 alpha characters',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter a hex color code for the background',
            name: 'tColor',
        },
        {
            type: 'list',
            message: 'Select circle, triangle or square',
            name: 'shape',
            choices:['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'Enter hex code for shape color',
            name: 'sColor'
        },
    ])

    .then((answers) => {
        const fileContents = generateHTML(answers);
        // const { title } = answers;

        // const fileName = title.toLowerCase().replace(" ", "_") + ".html";
        fs.writeFile(`logo.svg`, fileContents, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Generated logo.svg`);
            }
        });
    });
