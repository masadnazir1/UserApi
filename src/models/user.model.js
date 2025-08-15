import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicUrl: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    googleLoginToken: {
      type: String,
      default: "",
    },
    authToken: {
      type: String,
      default: "",
    },
    gmailToken: {
      type: String,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    access_token: {
      type: String,
      default: "",
    },
    expires_in: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
