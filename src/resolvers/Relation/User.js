const tweets = (parent, args, context) => {
  return context.prisma.user({ id: parent.id }).tweets();
};

module.exports = {
  tweets
};
