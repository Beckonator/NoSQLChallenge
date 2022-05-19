const router = require("express").Router();
const { Thought } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Thought.findAll()
    .then((thoughtData) => {
      res.json(thoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Thought.find({
    where: {
      id: req.params._id,
    },
  });
});

// a new thought
router.post("/", (req, res) => {
  Thought.create(req.body)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
