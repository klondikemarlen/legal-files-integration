// See example config at https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js
module.exports = {
  require: ["@babel/register", "./tests/test-setup.js", "./tests/hooks.js"],
  // reporter: "dot",
  // "node-option": ["trace-deprecation"],
  watch: true,
  "watch-files": ["."],
  ui: "bdd-lazy-var/global",
}
