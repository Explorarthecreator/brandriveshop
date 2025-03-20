import { NextResponse } from "next/server";
import { addUser, getUsers } from "../user";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Email and password and name are required" },
        { status: 400 }
      );
    }

    const users = getUsers();
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    addUser({ email, password, name });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
