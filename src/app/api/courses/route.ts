import { NextRequest, NextResponse } from "next/server";
import { courses } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const type = searchParams.get("type");
  const search = searchParams.get("search");
  const subject = searchParams.get("subject");

  let filtered = [...courses];

  if (type && type !== "الكل") {
    filtered = filtered.filter((c) => c.type === type);
  }

  if (subject) {
    filtered = filtered.filter((c) => c.subject === subject);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ courses: filtered, total: filtered.length });
}
