const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const mongoose = require("mongoose");

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

  await server.start();

  mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("MongoDB Connected");
      return httpServer.listen(process.env.PORT, () =>
        console.log(`Server connected on port ${process.env.PORT}`)
      );
    });
}

module.exports = startApolloServer;
