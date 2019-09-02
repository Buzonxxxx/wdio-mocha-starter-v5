# WebdriverIO v4

#### Version

During late December 2018, WebdriverIO released WebdriverIO version 5. We will be using the stable version 4

#### Documentation
http://v4.webdriver.io/

#### Dependency
- webdriverio@4.13.2
- mocha@latest
- wdio-spec-reporter

#### package.json
- "scripts": { "test": "wdio" },

#### WDIO setup
Execute `./node_modules/.bin/wdio`
Options:
- Step 1 – ‘On my local machine’ + press enter
- Step 2 – ‘Mocha’ + press enter
- Step 3 – ‘Y’ (for framework adapter) + press enter
- Step 4 – Change default directory to `./tests/**/*.js` + press enter
- Step 5 – Select the default report type (Dot) + press enter
- Step 6 – Select ‘Selenium-standalone’ + press enter
- Step 7 – Select ‘Silent’ + press enter

- Step 8 – For the screenshot option, keep this as the default selection + press enter

- Step 9 – Change the base URL to ‘www.webdriveruniversity.com’ + press enter

#### wdio.config.js
- baseUrl: 'http://www.webdriveruniversity.com/'
- browserName: 'chrome'
- services: ['selenium-standalone'],
- reporters: ['dot', 'spec'],

#### Trigger Test

  1. Git clone the [repo]
  `git clone [repo]`

  2. Install dependencies
  `npm install`

  3. Execute test
  `npm test`