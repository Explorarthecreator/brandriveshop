import { NextResponse } from "next/server";

type User = {
  email: string;
  password: string;
};

const users: User[] = []; // In-memory storage for users (replace with a database in production)

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simulate user creation
  const user = { email, password };
  users.push(user); // Replace with database logic in production

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
