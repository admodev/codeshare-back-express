// Modules
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// Config
import { environment } from "./infrastructure/config/environment.config";
import { connectDB } from "./infrastructure/database/mongoose.config";

// Routes
import routes from "./presentation/routes";

dotenv.config();

const PORT = environment.PORT || 8000;
const app = express();

// App configuration
app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
