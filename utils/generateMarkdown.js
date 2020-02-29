function generateMarkdown(data) {
  return `
# ${data.title}

[![GitHub license](https://www.nypl.org/sites/default/files/Readme_social.gif)]

  ===================

## Repository Description

  [![GitHub license](https://img.shields.io/badge/version-1.0.0-brightgreen)](https://github.com/users/${data.username}/${data.title})

  ${data.description}

  ---------------------

## Table of Contents

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Motivation](#Motivation)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

---------------------

  ## Installation

  These are the instructions in order to install this repo: ${data.installation}.

  ## Usage
  
  This project can be used for generating any type of README.md file for any desired repository.

  ## Motivation

  ${data.motivation} motivated me to create this repo.

  ## License

  This project contains the ${data.license} license.

  ## Contributing

  Nick Phillips.

  ## Tests

  Enter the "npm run test" command into Terminal or Git Bush to perform a test.

  ## Questions

  <img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

  If any questions arise, feel free to contact @nicknackwackpat on GitHub. Happy generating!
  `;
};

module.exports = generateMarkdown;
