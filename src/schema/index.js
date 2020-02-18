const path = require("path");
const { fileLoader, mergeTypes } = require("merge-graphql-schemas");

const typesArray = fileLoader(path.join(__dirname, "./types"), {
  ignoreIndex: false
});

module.exports = mergeTypes(typesArray, { all: true });
