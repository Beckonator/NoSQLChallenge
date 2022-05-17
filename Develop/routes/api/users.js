const router = require("express").Router();
const { User } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  User.create(req.body)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;