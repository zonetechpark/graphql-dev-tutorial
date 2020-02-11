module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateTweet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTweet(data: TweetCreateInput!): Tweet!
  updateTweet(data: TweetUpdateInput!, where: TweetWhereUniqueInput!): Tweet
  updateManyTweets(data: TweetUpdateManyMutationInput!, where: TweetWhereInput): BatchPayload!
  upsertTweet(where: TweetWhereUniqueInput!, create: TweetCreateInput!, update: TweetUpdateInput!): Tweet!
  deleteTweet(where: TweetWhereUniqueInput!): Tweet
  deleteManyTweets(where: TweetWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  tweet(where: TweetWhereUniqueInput!): Tweet
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet]!
  tweetsConnection(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TweetConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  tweet(where: TweetSubscriptionWhereInput): TweetSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tweet {
  id: ID!
  body: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TweetConnection {
  pageInfo: PageInfo!
  edges: [TweetEdge]!
  aggregate: AggregateTweet!
}

input TweetCreateInput {
  id: ID
  body: String!
  author: UserCreateOneWithoutTweetsInput!
}

input TweetCreateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  connect: [TweetWhereUniqueInput!]
}

input TweetCreateWithoutAuthorInput {
  id: ID
  body: String!
}

type TweetEdge {
  node: Tweet!
  cursor: String!
}

enum TweetOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TweetPreviousValues {
  id: ID!
  body: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TweetScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TweetScalarWhereInput!]
  OR: [TweetScalarWhereInput!]
  NOT: [TweetScalarWhereInput!]
}

type TweetSubscriptionPayload {
  mutation: MutationType!
  node: Tweet
  updatedFields: [String!]
  previousValues: TweetPreviousValues
}

input TweetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TweetWhereInput
  AND: [TweetSubscriptionWhereInput!]
  OR: [TweetSubscriptionWhereInput!]
  NOT: [TweetSubscriptionWhereInput!]
}

input TweetUpdateInput {
  body: String
  author: UserUpdateOneRequiredWithoutTweetsInput
}

input TweetUpdateManyDataInput {
  body: String
}

input TweetUpdateManyMutationInput {
  body: String
}

input TweetUpdateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  delete: [TweetWhereUniqueInput!]
  connect: [TweetWhereUniqueInput!]
  set: [TweetWhereUniqueInput!]
  disconnect: [TweetWhereUniqueInput!]
  update: [TweetUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TweetUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TweetScalarWhereInput!]
  updateMany: [TweetUpdateManyWithWhereNestedInput!]
}

input TweetUpdateManyWithWhereNestedInput {
  where: TweetScalarWhereInput!
  data: TweetUpdateManyDataInput!
}

input TweetUpdateWithoutAuthorDataInput {
  body: String
}

input TweetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  data: TweetUpdateWithoutAuthorDataInput!
}

input TweetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  update: TweetUpdateWithoutAuthorDataInput!
  create: TweetCreateWithoutAuthorInput!
}

input TweetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TweetWhereInput!]
  OR: [TweetWhereInput!]
  NOT: [TweetWhereInput!]
}

input TweetWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  age: Int
  createdAt: DateTime!
  updatedAt: DateTime!
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  age: Int
  tweets: TweetCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTweetsInput {
  id: ID
  name: String!
  age: Int
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  age_ASC
  age_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  age: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  age: Int
  tweets: TweetUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  age: Int
}

input UserUpdateOneRequiredWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  update: UserUpdateWithoutTweetsDataInput
  upsert: UserUpsertWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTweetsDataInput {
  name: String
  age: Int
}

input UserUpsertWithoutTweetsInput {
  update: UserUpdateWithoutTweetsDataInput!
  create: UserCreateWithoutTweetsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  tweets_every: TweetWhereInput
  tweets_some: TweetWhereInput
  tweets_none: TweetWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    