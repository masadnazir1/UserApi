// db.js
import mongoose from "mongoose";
import environment from "../environments/environment.js";
import { prettyLog } from "../utils/logger.js";

let isConnected = null;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(environment.MONGO_DATABASE_URL);

    isConnected = db.connections[0].readyState;

    prettyLog("Database connected", {
      SUCCESS: "Database connected successfully",
    });
  } catch (error) {
    prettyLog("Error connecting database", {
      ERROR: `Error: ${error.message}`,
    });

    throw new Error("MongoDB connection failed");
  }
}

export default connectDB;
