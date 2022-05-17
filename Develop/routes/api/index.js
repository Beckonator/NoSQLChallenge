const router = require("express").Router();
const thoughts = require("./thoughts.js");
const users = require("./users.js");

router.use("/users", users);
router.use("/thoughts", thoughts);

module.exports = router;
