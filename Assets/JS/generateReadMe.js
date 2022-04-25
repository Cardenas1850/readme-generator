const createReadme = require('./prompt-questions.js')

function generateReadme() {
    return `
<h1>${answer.title}</h1>

## Description
<h2>${answer.description}</h2>
## Table of Contents
<h2> </h2>
## Installation
<h2> ${answer.installation} </h2>
## Usage
<h2> ${answer.usage} </h2>>
## Credits
<h2> ${answer.contribution} </h2>
## License
<h2></h2>
## Badges
<h2></h2>
## Features
<h2></h2>
## How to Contribute
## Tests
<h2>${answer.testing}</h2>
## Questions?
    Contact me: ${answer.email}
    Github: ${answer.username}
    `
}