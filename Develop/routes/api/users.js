const router = require("express").Router();
const { User } = require("../../models");

// The `/api/categories` endpoint
// get all users
router.get("/", (req, res) => {
  User.findAll()
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
// update a category by its `_id` value
router.put("/:id", (req, res) => {
  User.update(
    {
      // All the fields you can update and the data attached to the request body.
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends,
    },
    {
      where: {
        username: req.params.username,
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
// delete a category by its `_id` value
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      username: req.params.username,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
