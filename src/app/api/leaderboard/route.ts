import { NextResponse } from "next/server";
import { leaderboard } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ leaderboard });
}
