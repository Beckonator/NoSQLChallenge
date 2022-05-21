const router = require("express").Router();
const { Thought, User } = require("../../models");

// to get all thoughts
router.get("/", (req, res) => {
  Thought.find()
    .then((thoughtData) => {
      res.json(thoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// to get a single thought by its `_id`
router.get("/:thoughtId", (req, res) => {
  Thought.find({ _id: req.params.thoughtId })
    .then((thoughtData) => {
      res.json(thoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
router.post("/:userId", (req, res) => {
  Thought.create(req.body)
    .then((thoughtData) => {
      const thoughtId = thoughtData._id;
      return User.findByIdAndUpdate(
        req.params.userId,
        {
          $push: { thoughts: thoughtId },
        },
        {
          new: true,
        }
      );
    })
    .then((thoughtData) => {
      res.json(thoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// to update a thought by its `_id`
router.put("/:id", (req, res) => {
  Thought.updateOne(
    {
      thoughtText: req.body.thoughtText,
      username: req.body.username,
      reactions: req.body.reactions,
    },
    {
      where: {},
    }
  );
});

// to remove a thought by its `_id`
router.delete("/:id", (req, res) => {});

// to create a reaction stored in a single thought's `reactions` array field

// to pull and remove a reaction by the reaction's `reactionId` value

module.exports = router;
