let users = [
  {
    id: "user-0",
    name: "John",
    age: 20
  }
];

let userCount = users.length;

const resolvers = {
  Query: {
    info: () => `Hello World`,
    users: () => users
  },
  Mutation: {
    createUser: (parent, { name, age }) => {
      const user = {
        id: `user-${userCount++}`,
        name,
        age
      };
      users.push(user);
      return user;
    }
  }
};

module.exports = resolvers;
