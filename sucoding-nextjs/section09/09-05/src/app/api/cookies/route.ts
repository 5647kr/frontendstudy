import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const name = cookieStore.get("name");
  const age = cookieStore.get("age");
  const gender = cookieStore.get("gender");

  return NextResponse.json({
    name,
    age,
    gender,
  });
}

export async function POST() {
  const cookieStore = await cookies();

  // 쿠키 지정
  cookieStore.set("name", "kim");
  // 쿠키에 옵션 추가
  cookieStore.set("age", "30", { secure: true, httpOnly: true });

  // 쿠키를 객체로 지정
  cookieStore.set({
    name: "gender",
    value: "male",
    httpOnly: true,
  });
  // 서버컴포넌트에서는 읽는 것밖엔 불가능 했지만 route안에서는 수정 및 삭제도 가능하다.
  return NextResponse.json("This is a Post Request");
}

export async function DELETE() {
  const cookieStore = await cookies();

  cookieStore.delete("name");
  cookieStore.delete("age");
  cookieStore.delete("gender");

  return NextResponse.json("This is a DELETE Request");
}
