import mongoose from "mongoose";
import bcrypt from "bcryptjs";


mongoose.connect("mongodb+srv://admin:hehe@cluster0111.8vng6.mongodb.net/weather")


const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

 export const UserModel = mongoose.model("User", userSchema);

