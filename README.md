# ts-react-comp-lib-template
A template for creating Typescript React components library

### Create your library from scratch cheatsheet:
> npm init

> npm install typescript tslib react @types/react --save-dev

> npx tsc --init
  - inits typescript config

> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts --save-dev
  - used to bundle the library into dist files
  - you then need to add a rollup.config.js
