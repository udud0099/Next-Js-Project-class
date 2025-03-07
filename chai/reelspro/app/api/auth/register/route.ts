import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "email is already regiser" },
        { status: 400 }
      );
    }
    await User.create({
      email,
      password,
    });

    return NextResponse.json(
      { message: "user regiser succesfullly" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "fail to regiser user" },
      { status: 500 }
    );
  }
}
