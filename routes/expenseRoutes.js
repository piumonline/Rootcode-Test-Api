const express = require("express");
const router = express.Router();
const {  getExpenses, filterExpenses,  createExpense,  updateExpense,  deleteExpense } = require("../controllers/expenseController");

// Define the routes for handling contacts
router.route("/").get(getExpenses).get(filterExpenses).post(createExpense);
router.route("/:id").put(updateExpense).delete(deleteExpense);

module.exports = router;
