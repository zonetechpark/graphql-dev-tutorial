const author = (parent, args, context) => {
  return context.prisma.tweet({ id: parent.id }).author();
};

module.exports = {
  author
};
