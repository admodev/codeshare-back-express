// Modules
import mongoose from "mongoose";

// Config
import { environment } from "../config/environment.config";

// TODO!: implement logger to handle this kind of logs
export const connectDB = async () => {
  try {
    await mongoose.connect(environment.DATABASE_URL);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
