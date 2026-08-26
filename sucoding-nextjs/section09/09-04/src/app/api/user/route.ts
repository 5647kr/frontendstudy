// 이 파일 안에서 HTTP 메소드를 그대로 함수 이름으로 정의하면 된다.

import { NextResponse } from "next/server";

// GET, POST, PATCH, DELETE, HEAD, OPTIONS 등 다양하게 설정할 수 있다.
export async function GET() {
  return NextResponse.json("This is a GET user request.");
}

export async function POST() {
  return NextResponse.json("This is a POST user request.");
}

export async function PUT() {
  return NextResponse.json("This is a PUT user request.");
}

export async function PATCH() {
  return NextResponse.json("This is a PATCH user request.");
}

export async function DELETE() {
  return NextResponse.json("This is a DELETE user request.");
}


// /api/user 라는 경로를 가지는 API 엔드포인트가 하나 생성되게 된다.