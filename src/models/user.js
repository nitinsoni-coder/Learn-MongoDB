import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
});

const User = model("users", userSchema);

export default User;
