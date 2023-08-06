const inquirer = require('inquirer')
const fs = require('fs');
const Circle = require('./lib/shapes.js')

const questions = [
    {
        type:'list',
        name:'shape',
        message:'What shape do you want your SVG?',
        choices:['square', 'circle', 'triangle']
    },
    {
        type:'input',
        name:'text',
        message:'What letters would you like to show on your SVG? (max 3 letters)'
    },
    {
        type:'input',
        name:'color',
        message:'What color do you want your shape to be?'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.svg`,data, err => {
        if(err){
            console.error(err)
        }
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const shape = new Circle(answers.shape,answers.text,answers.color);
        writeToFile(answers.shape, shape.render())
        console.log(answers.shape)
        console.log(answers.color)
        console.log(answers.text)
        })  
}


init()