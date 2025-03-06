import mongoose, { Document } from "mongoose";

export interface IAdminUser extends Document{ //? explain
    name: string,
    email: string
}

const AdminUserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

export const Admin =mongoose.models.User || mongoose.model("admin", AdminUserSchema) //? explain
