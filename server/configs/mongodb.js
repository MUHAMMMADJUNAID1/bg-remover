import mongoose from "mongoose";

const connectMongoDb = async () => {
  mongoose.connection.on("Connected", () => {
    console.log("Database connected!");
  });
  await mongoose.connect(`${process.env.MONGO_DB_URI}/bg-removal`);
};

export default connectMongoDb;
