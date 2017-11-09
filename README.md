# base-nodejs
A no-frills pre-bootstraped NodeJS repo to quick start your NodeJS projects.

## Contains

* Gulp / Basic Gulp Script
* ESLint / ESLint Configuration
* Mocha
* Unit.js
* Istanbul / nyc
* Basic TravisCI Configuration
* Codacy Integration / Coverage
* Cross Env (for environment variables)
* Basic package.json actions for:
  * Build -- `npm run build`
  * Test -- `npm test`
  * Coverage -- `npm run coverage`
  * Lint -- `npm run lint`
  * Fix -- `npm run fix`
  * Pretty -- `npm run pretty`

## How to use this repo
Simply clone or fork this repo and then remove

## TravisCI Integration
It is highly recommended that you install the [TravisCI CLI](https://github.com/travis-ci/travis.rb) tool before beginning.

## Codacy Coverage

In order for Codacy Coverage to work this to work, the Codacy Project Token must be added to your environment variables.

This can be done by setting the appropriate environment variable:
```
export CODACY_PROJECT_TOKEN=<Token_from_Codacy>
```
Or, by updating the `package.json` file to update the coverage action as follows

```js
  "coverage": "cross-env CODACY_PROJECT_TOKEN=<Token_from_Codacy> nyc --reporter=lcov mocha && cat ./coverage/lcov.info | codacy-coverage"
```

When integrating with Travis you will also need to configure travis with the environment variable for building by performing:
```
travis encrypt CODACY_PROJECT_TOKEN=<Token_from_Codacy> --add
```

## ESLint
ESLint is configured with over 150 rules for validating and quality checking code. Many issues that arise when linting can be fixed automatically by running `npm run fix`. The [ESLint Rules](https://eslint.org/docs/rules/) can be configured in the `.eslintrc.json` file.

## Testing
Testing uses mocha and the test scripts defined in the `test/` folder.

## Build and Gulp
The build process uses Gulp and the included `gulpfile.js` to run linting and testing. Changes to the build process should be done here.

# Prettier
To perform automatic reformatting of code for styling, run `npm run pretty`. The [prettier options](https://prettier.io/docs/en/options.html) can be configured in the `.prettierrc.json` file.
