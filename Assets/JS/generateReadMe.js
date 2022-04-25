function generateReadme(answers) {
    return `
<h1>${answers.title}</h1>

## Description
## Table of Contents
## Installation
## Usage
## Credits
## License
## Badges
## Features
## How to Contribute
## Tests
## Questions?
    Contact me: ${answers.email}
    Github: ${answers.username}

    `
}


module.exports = generateReadme;