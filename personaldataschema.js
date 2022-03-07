const mongoose = require("mongoose");

const personaldataSchema = mongoose.Schema({
  greeting: {
    type: String,
    required: true,
  },
  introduce: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PersondaData", personaldataSchema);
