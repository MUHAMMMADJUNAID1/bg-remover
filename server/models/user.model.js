import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  creditBalence: {
    type: Number,
    default: 5,
  },
});

export const User = mongoose.models.user || mongoose.model("User", userModel);
