# ts-react-comp-lib-template
A template for creating Typescript React components library

### Create your library from scratch cheatsheet:
#### Step 1 - Installing dev dependencies
> npm init

> npm install typescript tslib react @types/react --save-dev

> npx tsc --init
  - inits typescript config

> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts --save-dev
  - used to bundle the library into dist files
  - you then need to add a rollup.config.js

#### Step 2 - NPM publishing
npm user configuration file:
  - create a .npmrc in your home directory 
  - linux: "~/.npmrc"
  - windows: c:\Users\YOUR_WINDOWS_USERNAME\.npmrc

Your .npmrc file needs to have the following lines:
> @YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
> //npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN

!!! Make sure that package.json name & publishConfig.registry fields are scoped to the github username !!!
  - package.json.name: "@SCOPE_NAME/project_name"
  - package.json.package.publishConfig.registry: "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
  - SCOPE_NAME is same as YOUR_GITHUB_USERNAME

When publishing, use the following command:
> npm publish --registry https://registry.npmjs.org/

