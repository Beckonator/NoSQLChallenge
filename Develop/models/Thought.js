const { Schema, model, Types } = require("mongoose");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought is required!",
      minlength: 1,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => {
            new Types.ObjectId();
          },
        },
        reactionBody: {
          type: String,
          required: true,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
      },
      {
        timestamps: true,
      },
    ],
  },

  {
    timestamps: true,
  }
);
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
