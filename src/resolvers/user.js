const User = require("../models/user");
var ObjectId = require("mongoose").Types.ObjectId;

const userResolvers = {
  Query: {
    async getUsers() {
      return await User.find();
    },
    async getUser(_, { userId }) {
      return await User.findOne({ _id: ObjectId(userId) });
    },
  },
  Mutation: {
    async createUser(_, { registerInput: { email, password } }) {
      try {
        const newUser = new User({ email, password });
        await newUser.save();
        return newUser;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = userResolvers;
