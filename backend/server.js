const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const bodyParser = require('body-parser')

// To access environment variables in .env file
const dotenv = require("dotenv").config();

// Connect to the DB
connectDb();

const app = express();
const port = process.env.PORT || 5001;

// MIDDLEWARE

// to be able to read req.body
app.use(bodyParser.json({limit: '100mb'}));
app.use(express.json({limit: '100mb'}));

// handling routes
app.use("/api/", require("./routes/routes"));

// handling errors
app.use(errorHandler);

app.listen(port, () => console.log(`Server running at port ${port}`));