const { watch } = require("fs");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  watch: true,
};
