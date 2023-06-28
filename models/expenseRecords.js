//import mongoose to create mongoose model
const mongoose = require("mongoose");

//create Schema
const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  catagory: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("myexpenses", expenseSchema);
