const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
// const typeDefs = require("./types/schema");
const resolvers = require("./resolvers");

async function main() {
  const newUser = await prisma.createUser({
    name: "John",
    age: 34
  });
  console.log(newUser);

  const allUser = await prisma.users();
  console.log(allUser);
}

const server = new GraphQLServer({
  typeDefs: "./src/types/schema.graphql",
  resolvers,
  context: { prisma }
});

// main().catch(err => console.error(err));
server.start(() => console.log("Server started on localhost:4000"));