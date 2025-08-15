import express from "express";
import dotenv from "dotenv";
import conectdb from "./src/configs/db.js";
import { corsMiddleware } from "./src/middlewares/corsMiddleware.js";

dotenv.config();
conectdb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
import router from "./src/routes/index.js";

const port = process.env.PORT || 5000;

// Apply CORS middleware
app.use(corsMiddleware);
// Define route
app.get("/", (req, res) => {
  res.send("Welcome to Snappit Backend");
});

app.use("/api", router);

// Start the server
app.listen(port, () => {
  console.log("Server started");
  console.log("Port: ", port);
});
