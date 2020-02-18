// const { prisma } = require("../../generated/prisma-client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../../utils");

const signup = async (parent, args, context, info) => {
  const hashedPassword = await bcrypt.hash(args.password, 10);
  const newUser = await context.prisma.createUser({
    ...args,
    password: hashedPassword
  });

  const token = jwt.sign({ userId: newUser.id }, APP_SECRET);

  return {
    token,
    user: newUser
  };
};

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("User does not exists");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user
  };
};

const tweet = (parent, args, context, info) => {
  const userId = getUserId(context);
  return context.prisma.createTweet({
    body: args.body,
    author: { connect: { id: userId } }
  });
};

module.exports = {
  signup,
  login,
  tweet
};
