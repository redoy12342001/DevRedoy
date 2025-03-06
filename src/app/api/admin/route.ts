import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { IAdminUser, Admin } from "../../../../models/User";

// Get all users
export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    const user: IAdminUser[] = await Admin.find({});
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const user = await req.json();
    // console.log(user);
    if (!user) {
      return NextResponse.json({ message: "User Required" }, { status: 400 });
    }

    const existingUser = await Admin.findOne({ email: user.email });
    // console.log(existingUser);
    if (user.email === existingUser.email) {
      return NextResponse.json({message: "User Already Exists"})
    }

    const newUser = await Admin.create(user);
    return NextResponse.json(
      { message: "Signup Successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to post user" }, { status: 400 });
  }
}
