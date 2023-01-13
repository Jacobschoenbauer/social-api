const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/date')
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: 'Unnamed thought',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:timeStamp => dateFormat(timeStamp),
    },
    username: {
      type: String ,
      required: true,
      
    },

    reactions:[reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);



module.exports = thoughtSchema;