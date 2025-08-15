// config.js
import dotenv from "dotenv";
dotenv.config();

const production = {
  MONGO_DATABASE_URL: process.env.MONGO_DATABASE_URL_PROD,
};

const development = {
  MONGO_DATABASE_URL: process.env.MONGO_DATABASE_URL_DEV,
};

// Pick based on NODE_ENV
const environment =
  process.env.NODE_ENV === "production" ? production : development;

export default environment;
