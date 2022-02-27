import bcrypt from "bcrypt";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("user", userSchema);
