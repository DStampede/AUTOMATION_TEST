// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  allScriptsTimeout: 11000,
  getPageTimeout:    60000,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        '--start-maximized', // Uncomment to launch tests using the browser and comment the argument `properties` below
        //'--headless',
        //'--disable-gpu',
        //'--window-size=800,600',
        //'--no-sandbox',
        //'--disable-dev-shm-usage'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://clark.titusgt.com:6042/#/login',
  specs:  ['src/feature/*.feature',],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['src/hooks/generic.hooks.ts',
              'src/step_definition/*.definitions.ts',],
    tags: [],
    strict: true,
    format: [
      `json:reports/summary.json`,],
    dryRun: false,
    compiler: []
  },
  params: {},
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  // ignoreUncaughtExceptions: true,
};