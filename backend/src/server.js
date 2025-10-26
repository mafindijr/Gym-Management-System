import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});