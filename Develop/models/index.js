// import models
const User = require("./User");
const Thought = require("./Thought");

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  User,
  Thought,
};
