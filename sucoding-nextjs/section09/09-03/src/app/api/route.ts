// 이 파일 안에서 HTTP 메소드를 그대로 함수 이름으로 정의하면 된다.

import { NextRequest, NextResponse } from "next/server";

// 쿼리 스트링을 받을 땐 request라는 매개변수를 받으면 된다.
// 쿼리 스트링은 GET방식 아닌 나머지 방식에서도 사용 가능하지만 대부분 GET방식에서만 사용한다.
export async function GET(request: NextRequest) {
  // page의 쿼리 스트링의 값을 가져온다.
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
