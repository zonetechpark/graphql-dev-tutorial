const { GraphQLServer } = require("graphql-yoga");
// const typeDefs = require("./types/schema");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./src/types/schema.graphql",
  resolvers
});

server.start(() => console.log("Server started on localhost:4000"));
