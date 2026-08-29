import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://localhost:4000/todos");
    if (!res.ok) throw new Error("Failed to Fetch");

    const data = await res.json();

    const jsonString = JSON.stringify(data, null, 2);

    return new NextResponse(jsonString, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": 'attachment;filname="todos-export.json"',
      },
    });
  } catch (error) {
    console.error("JSON 내보내기 오류", error);
    return NextResponse.json({ error: "데이터 추출 실패" }, { status: 500 });
  }
}
