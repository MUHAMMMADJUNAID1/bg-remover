import express from "express";
import "dotenv/config";
import cors from "cors";
import connectMongoDb from "./configs/mongodb.js";

// app config

const PORT = process.env.PORT || 4000;

// initalize instatnce of express

const app = express();
// connecting mongodb
await connectMongoDb();

// initalize middleware
app.use(express.json());
app.use(cors());

// api routes
app.get("/", (req, res) => {
  return res.send("Api working");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
