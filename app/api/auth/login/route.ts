import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { getUsers } from "../user";

export async function POST(req: Request) {
  try {
    const { email, password, keepLoggedIn } = await req.json();

    // Find the user in the global users array
    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate a session token
    const token = uuidv4();

    // Create a response object
    const response = NextResponse.json({ message: "Logged in successfully" });

    // Set cookie with expiration based on "Keep me logged in"
    response.cookies.set("token", token, {
      maxAge: keepLoggedIn ? 60 * 60 * 24 * 7 : 60, // 1 week or 1 minute
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    // Handle unexpected errors
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
