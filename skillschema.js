const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Skill", skillSchema);
