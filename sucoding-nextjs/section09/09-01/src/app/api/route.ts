// 이 파일 안에서 HTTP 메소드를 그대로 함수 이름으로 정의하면 된다.

import { NextResponse } from "next/server";

// GET, POST, PATCH, DELETE, HEAD, OPTIONS 등 다양하게 설정할 수 있다.
export async function GET() {
  return NextResponse.json("This is a GET request.");
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
