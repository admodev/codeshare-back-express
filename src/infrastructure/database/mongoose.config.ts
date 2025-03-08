// Modules
import mongoose from "mongoose";

// Config
import { environment } from "../config/environment.config";

export const connectDB = async () => {
  try {
    await mongoose.connect(environment.DATABASE_URL);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
