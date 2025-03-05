// Modules
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// App configuration
app.use(cors());
app.use(express.json());
