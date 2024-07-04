const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: true,
});

module.exports = mongoose.model("Cohort", cohortSchema);
