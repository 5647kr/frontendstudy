# 할 일 관리 앱 - 데이터 내보내기 미션 가이드

## 🎯 미션 목표

Route Handler를 활용하여 파일 다운로드 기능을 구현할 수 있다.

- Route Handler로 파일 생성 및 다운로드 구현
- JSON 형식으로 데이터 내보내기
- Excel 파일 생성 및 다운로드
- HTTP 헤더를 통한 파일 다운로드 제어
- 외부 라이브러리(xlsx) 활용

---

## 📋 제공 사항

### 1. 기존 할 일 관리 앱

이전 미션에서 SECTION09/mission-09-02 완성한 할 일 관리 앱을 기반으로 진행합니다.

**필수 기능:**

- 할 일 목록 다운로드(JSON, 엑셀)
- 백엔드 API (`http://localhost:4000/todos`)

### 2. 추가할 기능

- **JSON 다운로드**: 할 일 목록을 JSON 파일로 다운로드
- **Excel 다운로드**: 할 일 목록을 Excel 파일로 다운로드

---

## 📝 미션 단계

### 미션 1: Route Handler로 파일 다운로드 이해하기

**목표:** 파일 다운로드가 어떻게 작동하는지 이해

**생각해볼 질문:**

1. 브라우저에서 파일을 다운로드하려면 무엇이 필요한가?
2. HTTP 응답에서 파일 다운로드를 유도하는 헤더는?
3. `Content-Type`과 `Content-Disposition` 헤더의 역할은?
4. Route Handler가 일반 응답과 파일 응답의 차이는?

**개념 정리:**

```typescript
// 일반 JSON 응답 (브라우저에 표시)
return NextResponse.json({ data: [...] })
// → 브라우저가 JSON을 화면에 표시

// 파일 다운로드 응답
return new NextResponse(fileData, {
  headers: {
    'Content-Type': 'application/json',
    'Content-Disposition': 'attachment; filename="data.json"'
    //                      ↑ 이 헤더가 다운로드를 유도
  }
})
// → 브라우저가 파일 다운로드 시작
```

**핵심 HTTP 헤더:**

| 헤더                  | 역할                    | 예시                                                       |
| --------------------- | ----------------------- | ---------------------------------------------------------- |
| `Content-Type`        | 파일 형식 지정          | `application/json`<br>`application/vnd.openxmlformats-...` |
| `Content-Disposition` | 다운로드 방식 및 파일명 | `attachment; filename="todos.json"`                        |

**체크리스트:**

- [ ] `Content-Disposition: attachment`의 의미 이해
- [ ] 파일명 지정 방법 이해
- [ ] NextResponse로 커스텀 헤더 설정 방법 파악

---

### 미션 2: JSON 다운로드 Route Handler 구현하기

**목표:** JSON 파일을 생성하고 다운로드하는 API 엔드포인트 구현

**생각해볼 질문:**

1. Route Handler 파일은 어디에 생성하는가?
2. 백엔드 API에서 받은 데이터를 그대로 내보내야 하는가?
3. JSON을 예쁘게 포맷팅하려면? (`JSON.stringify`의 두 번째, 세 번째 인자)
4. 에러 처리는 어떻게 하는가?

**구현 가이드(힌트):**

- 1 ~ 3은 직접 구현해보기
- 4번은 힌트 코드 제공

```typescript
// app/api/todos/export/json/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. 백엔드에서 할 일 목록 조회
    // 2. JSON 파싱
    // 3. JSON 문자열로 변환 (포맷팅)
    // 4. 파일 다운로드 응답
    return new NextResponse(jsonString, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": 'attachment:filename="todos-export.json"',
      },
    });
  } catch (error) {
    console.error("JSON 내보내기 오류:", error);
    return NextResponse.json({ error: "데이터 추출 실패" }, { status: 500 });
  }
}
```

**실험해보기:**

- [ ] Route Handler 파일 생성
- [ ] GET 함수 구현
- [ ] 버튼 클릭 → JSON 파일 다운로드
- [ ] 다운로드된 파일 열어서 내용 확인
- [ ] 포맷팅이 예쁘게 되어 있는가? (들여쓰기 2칸)
- [ ] 할 일이 없을 때도 정상 작동하는가?

---

### 미션 4: Excel 다운로드 준비하기

**목표:** xlsx 라이브러리 설치 및 기본 사용법 이해

**생각해볼 질문:**

1. JSON과 Excel의 차이는 무엇인가?
2. 왜 Excel 파일은 라이브러리가 필요한가?
3. xlsx 라이브러리는 무엇을 하는가?

**xlsx 라이브러리 설치:**

```bash
npm install xlsx
# 또는
yarn add xlsx
```

**개념 정리:**

```typescript
// Excel 파일 구조
워크북(Workbook) - Excel 파일 자체
  └─ 워크시트(Worksheet) - 시트 1개
       └─ 셀(Cell) - 각 칸

// xlsx 라이브러리의 주요 함수
XLSX.utils.json_to_sheet(data)     // JSON → 워크시트
XLSX.utils.book_new()               // 새 워크북 생성
XLSX.utils.book_append_sheet()      // 워크북에 시트 추가
XLSX.write(workbook, options)       // 워크북 → 파일 데이터
```

**체크리스트:**

- [ ] xlsx 패키지 설치
- [ ] import 에러 없이 정상 동작 확인
- [ ] xlsx가 서버 환경에서만 작동함을 이해

---

### 미션 5: Excel 다운로드 Route Handler 구현하기

**목표:** Excel 파일을 생성하고 다운로드하는 API 구현

**생각해볼 질문:**

1. JSON을 Excel 시트로 어떻게 변환하는가?
2. 워크북과 워크시트의 관계는?
3. Excel 파일의 MIME 타입은?
4. Buffer와 Blob의 차이는?

**구현 가이드:**

- 1 ~ 4는 직접 해보기
- 5번 부터는 샘플 코드 제공

```typescript
// app/api/todos/export/excel/route.ts

import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    // 1. 백엔드에서 할 일 목록 조회
    // 2. JSON 데이터를 Excel 워크시트로 변환
    // 3. 새 워크북 생성
    // 4. 워크북에 워크시트 추가
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
```

**실험해보기:**

- [ ] Route Handler 파일 생성
- [ ] xlsx import 및 사용
- [ ] Excel 다운로드 버튼 기능 연결
- [ ] 버튼 클릭 → Excel 파일 다운로드
- [ ] Excel 파일 열어서 확인
- [ ] 데이터가 표 형태로 잘 정리되어 있는가?
- [ ] 한글이 깨지지 않는가?

---

## 🔍 핵심 개념 정리

### HTTP 헤더와 파일 다운로드

```typescript
// 필수 헤더 2가지

// 1. Content-Type: 파일 형식 지정
'Content-Type': 'application/json'           // JSON
'Content-Type': 'application/vnd.openxmlformats-...' // Excel
'Content-Type': 'text/csv'                   // CSV
'Content-Type': 'application/pdf'            // PDF

// 2. Content-Disposition: 다운로드 방식
'Content-Disposition': 'attachment; filename="..."'
//                      ↑ attachment: 다운로드
//                      inline: 브라우저에서 열기
```

### JSON.stringify 옵션

```typescript
JSON.stringify(data, replacer, space);

// data: 변환할 객체
// replacer: 필터링 함수 (null이면 모두 포함)
// space: 들여쓰기

// 예시
JSON.stringify(todos, null, 2);
// {
//   "id": 1,
//   "title": "할 일",
//   ...
// }

JSON.stringify(todos); // 공백 없음 (압축)
// {"id":1,"title":"할 일",...}
```

### xlsx 라이브러리 흐름

```typescript
// 1. JSON → Worksheet
const ws = XLSX.utils.json_to_sheet(data)

// 2. Workbook 생성
const wb = XLSX.utils.book_new()

// 3. Worksheet를 Workbook에 추가
XLSX.utils.book_append_sheet(wb, ws, '시트이름')

// 4. Workbook → Buffer
const buffer = XLSX.write(wb, {
  bookType: 'xlsx',
  type: 'buffer'
})

// 5. Response 반환
return new NextResponse(buffer, { headers: {...} })
```
