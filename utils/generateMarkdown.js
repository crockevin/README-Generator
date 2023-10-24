// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.trim() === ''){
    return ''
  } else if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if(license === 'Mozilla Public license'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if(license === 'GNU general public license v3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

  } else if(license === 'BDS 3-clause license'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.trim() === ''){
    return ''
  } else if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`

  } else if(license === 'Apache'){
    return `https://opensource.org/licenses/Apache-2.0`

  } else if(license === 'Mozilla Public license'){
    return `https://opensource.org/licenses/MPL-2.0`

  } else if(license === 'GNU general public license v3.0'){
    return `https://www.gnu.org/licenses/gpl-3.0`

  } else if(license === 'BDS 3-clause license'){
    return `https://opensource.org/licenses/BSD-3-Clause`

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.trim() === ''){
    return ''
  } else{
    return `## License\n
    ${license}, ${renderLicenseLink(license)}\n`
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let start = `# ${data.name}\n
  ${renderLicenseBadge(data.license)}`
  let toc = `## Table of contents\n\n`
  let theRest = ``
if(data.desc.trim() !== ''){
  toc += `[Description](#description)\n\n`
  theRest += `## Description\n
  ${data.desc}\n`
}
if(data.install.trim() !== ''){
  toc += `[Installation](#installation)\n\n`
  theRest += `## Installation\n
  ${data.install}\n`
}
if(data.usage.trim() !== ''){
  toc += `[Usage](#usage)\n\n`
  theRest += `## Usage\n
  ${data.usage}\n`
}
if(data.license.trim() !== ''){
  toc += `[License](#license)\n\n`
  theRest += `${renderLicenseSection(data.license)}`
}
if(data.cont.trim() !== ''){
  toc += `[Contribution](#contribution)\n\n`
  theRest += `## Contribution\n
  ${data.cont}\n`
}
if(data.test.trim() !== ''){
  toc += `[Testing](#testing)\n\n`
  theRest += `## Testing\n
  ${data.test}\n`
}
if(data.username.trim() !== ''){
  toc += `[Question](#question)\n\n`
  theRest += `## Question\n
  To reach for me for question about this project:\n
  https://github.com/${data.username}\n\n`
}
if(data.email.trim() !== ''){
  theRest += `${data.email}\n`
}
const readMe = `${start}\n${toc}\n${theRest}`
return readMe
}

module.exports = generateMarkdown;
