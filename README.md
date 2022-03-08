# ts-react-comp-lib-template
A template for creating Typescript React components library

## Create your library from scratch cheatsheet:
### Step 1 - installing dev dependencies
> npm init

> npm install typescript tslib react @types/react --save-dev

> npx tsc --init
  - inits typescript config

> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts --save-dev
  - used to bundle the library into dist files
  - you then need to add a rollup.config.js

### Step 2 - npm publishing
npm user configuration file:
  - create a .npmrc in your home directory 
  - linux: "~/.npmrc"
  - windows: c:\Users\YOUR_WINDOWS_USERNAME\\.npmrc

Your .npmrc file needs to have the following lines:
> @YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
> //npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN

!!! Make sure that package.json name & publishConfig.registry fields are scoped to the github username !!!
  - package.json.name: "@YOUR_GITHUB_USERNAME/REPOSITORY_NAME"
  - package.json.publishConfig.registry: "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"

When publishing, use the following command:
> npm publish --registry https://registry.npmjs.org/

When installing the new package, use the following command:
> npm install @YOUR_GITHUB_USERNAME/REPOSITORY_NAME

If the repository is private, the end developer must obtain a github accesss token and configure the .npmrc file

### Step 3 - adding styles
> npm install postcss rollup-plugin-postcss --save-dev
  - then configure rollup.config.js to root directory to use postcss plugin

### Step 4 - testing your library components
> npm install @testing-library/react jest @types/jest --save-dev
  - then add jest.config.js to root directory

> npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
  - then add babel.config.js to root directory

> npm install react-dom --save-dev
  - running tests will fail if react-dom package is missing

> npm install identity-obj-proxy --save-dev
  - this handles css imports while testing components with jest & testing-library

### Step 5 - storybook
> npx sb init

### Step 6 - recreating package-lock.json
It's better to recreate the lock file from a fresh npm install (using package.json),
as it includes missing peer dependencies. After next command, package-lock.json will be much larger.

Before running the next command, clear node_modules folder & delete package-lock.json

> npm install
