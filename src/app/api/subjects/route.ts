import { NextResponse } from "next/server";
import { subjects } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ subjects });
}
