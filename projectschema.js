const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
  },
});

module.exports = mongoose.model("Project", projectSchema);
