const router = require("express").Router();
const { User } = require("../../models");

// all users
router.get("/", (req, res) => {
  User.find()
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// get single user by '_id' and populated thought and friend data
router.get("/", (req, res) => {
  User.find({ _id: req.params.userId })
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// a new user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// to update a user by its `_id`
router.put("/:id", (req, res) => {
  User.updateOne(
    {
      // all the fields you can update and the data attached to the request body.
      username: req.body.username,
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends,
    },
    {
      where: {
        _id: req.params.id,
      },
    }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// to remove user by its `_id`
router.delete("/:id", (req, res) => {
  User.deleteOne({
    where: {
      _id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// to add a new friend to a user's friend list
router.post("/:userId/friends/:friendId", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    {
      $push: { friends: req.params.friendId },
    },
    {
      new: true,
    }
  )
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// to remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", (req, res) => {
  User.findOneAndDelete(
    req.params.userId,
    {
      $pull: { friends: req.params.friendId },
    },
    {
      new: true,
    }
  )
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
