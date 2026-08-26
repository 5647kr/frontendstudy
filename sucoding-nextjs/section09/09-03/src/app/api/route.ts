// 동적 라우트를 정의하고 동적 세그먼트를 활용할 수 있다.

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("_page");
  const limit = request.nextUrl.searchParams.get("_limit");

  return NextResponse.json(
    `This is a GET request. page: ${page}, limit: ${limit}`,
  );
}

export async function POST() {
  return NextResponse.json("This is a POST request.");
}

export async function PUT() {
  return NextResponse.json("This is a PUT request.");
}

export async function PATCH() {
  return NextResponse.json("This is a PATCH request.");
}

export async function DELETE() {
  return NextResponse.json("This is a DELETE request.");
}

//  쿼리 스트링도 전달할 수 있다.
