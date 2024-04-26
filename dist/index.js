"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const task_1 = __importDefault(require("./routes/task"));
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use((0, cors_1.default)());
app.use(express.json());
app.use("/task", task_1.default);
app.listen(5000, () => {
    console.log(`app is listening at ${5000}`);
});
