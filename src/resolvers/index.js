const Query = require("./Query");
const Mutation = require("./Mutation");
const User = require("./Relation/User");
const Tweet = require("./Relation/Tweet");

const resolvers = {
  Query,
  Mutation,
  User,
  Tweet
};

module.exports = resolvers;
