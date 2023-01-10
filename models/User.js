const { Schema, model } = require('mongoose');
const thoughtsSchema = require("./Thoughts")
const friendsSchenma = require("./Friends")

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        max_length: 50,
      },
      email: {
        type: String,
        required: true,
        max_length: 50,
      },
      thoughts: [thoughtsSchema],
      friends: [friendsSchenma],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const User = model('user', userSchema);
  
  module.exports = User;