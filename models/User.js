const { Schema, model } = require('mongoose');
//sets up model for user
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        max_length: 50,
        trim: true,
        unique: true,
      },
      //has the match so only a email can be entered there
      email: {
        type: String,
        required: true,
        max_length: 50,
        unique: true,
        match:[/.+@.+\..+/,"must match email address"],
      },
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'Thought',
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref:'User'
      }],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const User = model('User', userSchema);
  
  module.exports = User;