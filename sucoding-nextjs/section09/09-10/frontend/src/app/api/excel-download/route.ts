import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    // 1. 백엔드에서 할 일 목록 조회
    const res = await fetch("http://localhost:4000/todos");

    if (!res.ok) {
      throw new Error("Failed to Fetch");
    }

    const data = await res.json();

    const todos = data.data;

    // 2. JSON 데이터를 Excel 워크시트로 변환
    const workSheet = XLSX.utils.json_to_sheet(todos);
    // 3. 새 워크북 생성
    const workbook = XLSX.utils.book_new();
    // 4. 워크북에 워크시트 추가
    XLSX.utils.book_append_sheet(workbook, workSheet, "Todos");

    // 5. 워크북을 Buffer로 변환
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx", // Excel 2007+ 형식
      type: "buffer", // Node.js Buffer로 출력
    });

    // 6. 파일 다운로드 응답
    return new NextResponse(excelBuffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="todos-export.xlsx"',
      },
    });
  } catch (error) {
    console.error("Excel 내보내기 오류:", error);

    return NextResponse.json({ error: "엑셀 생성 실패" }, { status: 500 });
  }
}
