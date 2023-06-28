const express=require("express");
const routePath=require("./routes/expenseRoutes");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

//db connection
connectDb();
const app=express();

//use express.json() to get data into json format
app.use(express.json());

//use cors
app.use(cors());

//middleware
app.use(express.json())
app.use("/myexpense/api", routePath); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  