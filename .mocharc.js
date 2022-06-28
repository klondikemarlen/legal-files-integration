module.exports = {
  require: ["@babel/register", "./tests/test-setup.js", "./tests/hooks.js"],
  // reporter: "dot",
  watch: true,
  watchFiles: ["."],
  ui: "bdd-lazy-var/global",
}
