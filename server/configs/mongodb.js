import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const connectMongoDb = async () => {
  try {
    mongoose.connection.on("Connected", () => {
      console.log("Database connected!");
    });
    await mongoose.connect(`${process.env.MONGO_DB_URI}/bg-removal`);
  } catch (error) {
    console.error("MONGODB connection error: ", error);
    process.exit(1);
  }
};

export default connectMongoDb;
