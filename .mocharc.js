module.exports = {
  require: ["@babel/register", "./tests/test-setup.js"],
  // reporter: "dot",
  watch: true,
  watchFiles: ["."],
  ui: "bdd-lazy-var/global",
}
