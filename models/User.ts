import mongoose, { Document } from "mongoose";

export interface IUser extends Document{ //? explain
    name: string,
    email: string
}

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

export const User =mongoose.models.User || mongoose.model("User", UserSchema) //? explain
