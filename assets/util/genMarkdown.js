function genData(data) {
  return `
  [![Generic badge](https://img.shields.io/badge/license-${
    data.license
  }-blue.svg)](${licenseLink(data)})
  # ${data.title}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## License
  This app is licensed under the ${data.license} license.
  * Email: 
  [${data.email}](mailto:${data.email})
  * GitHub: [${data.username}](https://github.com/${data.username})
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  `;
};

function licenseLink(data) {
  let licenseLink = "";
  switch (data.license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      return licenseLink;
    case "IBM":
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      return licenseLink;
    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
    case "GNU":
      licenseLink = "https://opensource.org/licenses/GPL-3.0";
      return licenseLink;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-2.0";
      return licenseLink;
    default:
      licenseLink = "";
      return licenseLink;
  }
};

module.exports = genData;