import { headers } from "next/headers";
import { NextResponse, userAgent } from "next/server";

export async function GET() {
  // header 객체 반환
  const headerList = await headers();
  return NextResponse.json({
    userAgent: headerList.get("user-agent"),
  });
}
