import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["participater", "organiser"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

export default User;
