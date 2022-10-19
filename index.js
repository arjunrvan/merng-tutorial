const express = require("express");
const { ApolloServer } = require("apollo-server");
const http = require("http");
const mongoose = require("mongoose");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/schema/user");
require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req,
  introspection: true,
  playground: true,
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen();
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
