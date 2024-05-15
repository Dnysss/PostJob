const mongoose = require("mongoose");
const { Schema } = mongoose;

const Job = mongoose.model(
  "Job",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      salary: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Job;
