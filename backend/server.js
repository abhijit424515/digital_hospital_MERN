import express, { json } from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDb  from "./config/db.js";
import dotenv from 'dotenv';
import router from "./routes/routes.js"
dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5001;
app.use(json({limit: '100mb'}));
app.use(json({limit: '100mb'}));
app.use("/",router)
app.use(errorHandler);
app.listen(port, () => console.log(`Server running at port ${port}`));