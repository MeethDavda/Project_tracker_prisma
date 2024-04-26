const express = require("express");
const mongoose = require("mongoose");
import cors from "cors";
import taskRoutes from "./routes/task";
import userRoutes from "./routes/user";
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/task", taskRoutes);
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log(`app is listening at ${5000}`);
});
