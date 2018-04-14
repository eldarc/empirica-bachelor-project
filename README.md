# empirica-bachelor-project

> Eldar Cejvanovic's bachelor project @ College of Computer Science and Business Communications eMPIRICA

## Objective
This project is intended to be a central demonstration of the topic **"Node.js: Role in automating the development of front-end web applications"**. It is built with Vue.js and inside the build process incorporates the `vue-prerender` plugin which I wrote as a tool for parsing the `vue-router` and prerendering parsed paths.

Localization is done for the English language and the Bosnian/Croatian/Serbian language by using the `vue-i18n-gettext` plugin which I'm developing at the time of writing. For automated parsing and compiling of strings (which require localization), `vue-gettext-tools` plugin is leveraged, which I'm also developing. Its main purpose is to be a helper for the `vue-i18n-gettext` plugin but could be adjusted to work with other plugins.

## Key files
`build/build.js` contains the execution of the `vue-prerender` plugin once the normal Vue.js build completes.
`build/gettext.js` contains all needed settings for parsing translation strings and compiling them to `.po` and `.json` files.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
