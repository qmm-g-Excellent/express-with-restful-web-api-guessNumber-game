const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: "spec/integration-tests",
  spec_files: [
    "**/*[sS]pec.js"
  ],
  helpers: [
    "helpers/**/*.js"
  ],
  stopSpecOnExpectationFailure: false,
  random: false
});

jasmine.execute();
