import { error } from "console";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { IUser, User } from "../../../../models/User";

// Get all users
export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    const user: IUser[] = await User.find({});
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
