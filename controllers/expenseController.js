//import expense Records model
const myexpenses = require("../models/expenseRecords");

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const allExpenses = await myexpenses.find({});
    res.status(200).json(allExpenses);
  } catch (err) {
    res.json(err);
}
};

// filter expenses
const filterExpenses = async (req, res) => {
  try {
    console.log(req.body);
    const catagory = req.params.catagory;
    const expenseItems = await myexpenses.find({catagory: catagory});
    res.status(200).json(expenseItems);
  } catch (err) {
    res.json(err);
  }
};

//Create New expenses
const createExpense = async (req, res) => {
  try {
    console.log(req.body);
    const newExpensee = new myexpenses({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      catagory: req.body.catagory,
      amount: req.body.amount,
    });
    //save this expense item in database
    const saveTitle = await newExpensee.save();
    res.status(200).json(saveTitle);
  } catch (err) {
    res.json(err);
  }
};

//Update expense
const updateExpense = async (req, res) => {
  try {
    //find the item by its id and update it
    console.log(req.body);
    const updateExpense = await myexpenses.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }
    );
    res.status(200).json(updateExpense);
  } catch (err) {
    res.json(err);
  }
};

//Delete expense
const deleteExpense = async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteExpense = await myexpenses.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("Expense Item Deleted");
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getExpenses, filterExpenses,  createExpense,  updateExpense,  deleteExpense };
