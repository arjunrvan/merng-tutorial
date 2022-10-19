const { gql } = require("apollo-server-core");

const typeDefs = gql`
  input RegisterInput {
    email: String!
    password: String!
  }

  type User {
    _id: ID!
    email: String!
    password: String!
    createdAt: String!
  }

  type Query {
    getUsers: [User]!
    getUser(userId: ID!): User!
  }

  type Mutation {
    createUser(registerInput: RegisterInput!): User!
  }
`;

module.exports = typeDefs;
