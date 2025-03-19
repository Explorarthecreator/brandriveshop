import { NextResponse } from "next/server";
import { getUsers } from "../auth/user";

export async function GET() {
  try {
    const totalUsers = getUsers().length;

    const activeSessions = Math.floor(Math.random() * 100);

    const salesRevenue = {
      currency: "NGN",
      value: Math.floor(Math.random() * 10000),
    };

    return NextResponse.json({
      totalUsers,
      activeSessions,
      salesRevenue,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
