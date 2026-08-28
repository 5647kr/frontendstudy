import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") || "";
  try {
    const res = await fetch(
      `${process.env.VITE_BASE_URL}/team-members/search?q=${query}`,
      {
        cache: "force-cache",
        next: {
          tags: ["team-members"],
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to Search Team Members");
    }

    const data = await res.json();

    console.log(data);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        status: 500,
        message: "Fatch Error",
      },
      { status: 500 },
    );
  }
}
