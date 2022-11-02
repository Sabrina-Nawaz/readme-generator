// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
      "GPL": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
      "Mozilla Public License": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT",  
      "Apache": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "WTFPL": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", 
      "N/A": ''
  }
  return licenses[license]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
  "GPL": "https://www.gnu.org/licenses/gpl-3.0", 
  "Mozilla Public License": "https://opensource.org/licenses/MPL-2.0",
  "MIT": "https://opensource.org/licenses/MIT",  
  "Apache": "https://opensource.org/licenses/Apache-2.0",
  "WTFPL": "http://www.wtfpl.net/about/)", 
  "N/A": ''
  }
  return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = {
    "GPL": `https://www.gnu.org/licenses/gpl-3.0`, 
    "Mozilla Public License": "https://opensource.org/licenses/MPL-2.0",
    "MIT": `
    > ### MIT License
    > 
    > Copyright (c) [2021]
    > 
    > __Permission is hereby granted, free of charge, to any person obtaining a copy__
    > __of this software and associated documentation files (the "Software"), to deal__
    > __in the Software without restriction, including without limitation the rights__
    > __to use, copy, modify, merge, publish, distribute, sublicense, and/or sell__
    > __copies of the Software, and to permit persons to whom the Software is__
    > __furnished to do so, subject to the following conditions:__
    > 
    > The above copyright notice and this permission notice shall be included in all
    > copies or substantial portions of the Software.
    > 
    > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    > IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    > FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    > AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    > LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    > OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    > SOFTWARE.
      `,  
    "Apache": "https://opensource.org/licenses/Apache-2.0",
    "WTFPL": "http://www.wtfpl.net/about/)", 
    "N/A": ''
    }
    return licenseText[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log({data})
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## ${data.description}
  ${data.installation}
  ## Usage ${data.usage}
  ${data.contribution}
  ${data.tests}
  ${data.github}
  ${data.email}
  ${data.repo}
  `;

}

module.exports = generateMarkdown;
