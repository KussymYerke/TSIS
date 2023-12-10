const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users"); // file path
const authRoute = require("./routes/auth"); // file path
// const nodemon = require("nodemon");

dotenv.config(); // it is used to run dotenv 

mongoose.connect("mongodb+srv://urk:123@cluster.gu0n9q2.mongodb.net/");

// middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute) // when you write this url open userRoute
app.use("/api/auth", authRoute) // when you write this url open userRoute

app.listen(8800, () => {
    console.log("Backend");
})