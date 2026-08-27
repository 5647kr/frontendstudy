export const dynamic = "force-static";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:4000/posts", {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch");
    }
    const posts = await res.json();

    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
      message: (e instanceof Error && e.message) || "에러가 발생했습니다.",
    });
  }
}
