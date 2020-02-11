const resolvers = {
  Query: {
    info: () => `Hello World`,
    users: (parent, args, context, info) => {
      return context.prisma.users();
    }
  }
};

module.exports = resolvers;
