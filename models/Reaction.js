const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
        type: String,
        required: true,
        max_length: 50,
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;