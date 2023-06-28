const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.5taiw2c.mongodb.net/RootcodeExpenseDb?retryWrites=true&w=majority");
    console.log(
      "Database connected: ",
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
