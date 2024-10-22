import express from "express";
import "dotenv/config";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDb from "./configs/mongodb.js";

dotenv.config({ path: "./.env" });
// app config
const PORT = process.env.PORT || 4000;
// initalize instatnce of express
const app = express();

// initalize middleware
app.use(express.json());
app.use(cors());
console.log(process.env.MONGO_DB_URI);

connectMongoDb()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB  connection error !!!", err);
  });

// api routes
app.get("/", (req, res) => {
  return res.send("Api working");
});
