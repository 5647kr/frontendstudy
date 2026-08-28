# 팀 멤버 검색 앱 미션 가이드

## 🎯 미션 목표

Next.js의 Route Handler와 Data Cache를 이해하고 실전에서 활용할 수 있다.

- Route Handler의 개념과 사용법 이해
- 클라이언트 fetch vs Route Handler 차이점
- Data Cache 활용 방법
- 캐시 무효화
- 검색 기능 구현 및 로딩 상태 처리

---

## 📋 제공 사항

### 1. 프로젝트 구조

```
project/
├── backend/
│   ├── server.js          # Express 서버
│   ├── data/
│   │   └── teamMember.js  # 팀 멤버 데이터
│   └── package.json
└── frontend/
    └── src/
        ├── app/
        │   ├── page.tsx        # 메인 페이지
        │   └── layout.tsx
        ├── components/
        │   └── TeamMember.tsx  # 팀 멤버 아이템 컴포넌트
        ├── styles/
        │   └── index.css
        └── type/
            └── index.d.ts      # 타입 정의
```

### 2. Backend API 명세

**Base URL:** `http://localhost:4000`

| Method | Endpoint               | Query Parameters | Response                                          | 지연시간 | 설명           |
| ------ | ---------------------- | ---------------- | ------------------------------------------------- | -------- | -------------- |
| GET    | `/team-members`        | -                | `{ ok: true, count: number, data: TeamMember[] }` | 없음     | 전체 팀원 목록 |
| GET    | `/team-members/search` | `q` (검색어)     | `{ ok: true, count: number, data: TeamMember[] }` | **3초**  | 이름으로 검색  |

**TeamMember 타입:**

```typescript
type TeamMember = {
  id: string;
  name: string;
  email: string;
  lastOnline: string;
  avatar: string;
};
```

**검색 API 특징:**

- `q` 파라미터가 없거나 빈 문자열이면 전체 목록 반환
- 대소문자 구분 없이 이름에서 부분 일치 검색
- **의도적으로 3초 지연** (캐시 효과 확인용)

### 3. 제공되는 UI 컴포넌트

- **검색 입력창** - 팀 멤버 검색
- **TeamMember 컴포넌트** - 개별 팀 멤버 카드
- **Purge Member Cache 버튼** - 캐시 삭제 버튼

---

## 📝 미션 단계

### 미션 0: 환경 설정 및 서버 실행

**목표:** 백엔드 서버와 프론트엔드 프로젝트 실행

**요구사항:**

1. 백엔드 서버 실행

   ```bash
   cd backend
   npm install
   npm start
   # http://localhost:4000 에서 실행됨
   ```

2. 프론트엔드 실행

   ```bash
   cd frontend
   npm install
   npm run dev
   # http://localhost:3000 에서 실행됨
   ```

3. API 테스트
   - 브라우저에서 `http://localhost:4000/team-members` 접속
   - 10명의 팀 멤버 데이터 확인

**체크리스트:**

- [ ] 백엔드 서버가 4000번 포트에서 실행 중
- [ ] 프론트엔드가 3000번 포트에서 실행 중
- [ ] 기본 UI가 정상적으로 보임 (퍼블리싱만 된 상태)
- [ ] API 응답 확인 (10명의 팀 멤버)

---

### 미션 1: 초기 팀 멤버 목록 불러오기

**목표:** Server Component에서 전체 팀 멤버 목록 조회 및 표시

**생각해볼 질문:**

1. Server Component에서 외부 API를 어떻게 호출하는가?
2. 팀 멤버 데이터가 없을 때는 무엇을 표시해야 하는가?
3. `fetch`의 기본 캐시 동작은 무엇인가?

**실험해보기:**

- [ ] `getTeamMembers` 함수 구현
- [ ] 페이지 접속 시 10명의 팀 멤버 표시 확인
- [ ] 각 팀 멤버의 프로필, 이름, 이메일, 마지막 접속 시간 확인
- [ ] 데이터가 정상적으로 렌더링되는가?

---

### 미션 2: 검색 기능 구현 (클라이언트 fetch)

**목표:** 검색 입력창에 입력 시 검색 API 호출

**요구사항:**

- 입력값 변경 시 검색 API 호출
- 검색 결과로 팀 멤버 목록 업데이트

**생각해볼 질문:**

1. 검색 기능은 Server Component에서 구현 가능한가?
2. 검색할 때마다 API를 호출하는 것이 효율적인가?
3. 검색 중 로딩 상태를 어떻게 표시하는가?

**실험해보기:**

- [ ] 검색창에 "Maria" 입력
- [ ] 3초 후 검색 결과 표시 확인
- [ ] 로딩 중 "Searching..." 메시지 표시

**문제점 파악:**

```
현재 구현의 문제:
1. 검색할 때마다 3초 대기 (매우 느림)
2. 같은 검색어로 여러 번 검색해도 매번 3초 대기
3. 캐시가 전혀 활용되지 않음

왜?
- 클라이언트에서 직접 fetch하면 Next.js의 Data Cache를 사용할 수 없음

해결책:
- Route Handler 사용!
```

---

### 미션 3: Route Handler 이해하기

**목표:** Route Handler가 무엇인지 이해하고 언제 사용하는지 파악

**생각해볼 질문:**

1. Route Handler는 무엇인가?
2. 왜 클라이언트에서 직접 fetch하면 안 되는가?
3. Route Handler에서 외부 API를 호출하면 어떤 이점이 있는가?
4. Data Cache는 어디서 작동하는가?

**클라이언트 fetch vs Route Handler:**

| 항목              | 클라이언트 fetch     | Route Handler          |
| ----------------- | -------------------- | ---------------------- |
| **실행 위치**     | 브라우저             | Next.js 서버           |
| **Data Cache**    | ❌ 사용 불가         | ✅ 사용 가능           |
| **캐시 제어**     | 브라우저 HTTP 캐시만 | Next.js Data Cache     |
| **revalidateTag** | ❌ 사용 불가         | ✅ 사용 가능           |
| **CORS 이슈**     | ⚠️ 발생 가능         | ✅ 없음                |
| **사용 시점**     | 외부 공개 API        | 내부 API, 캐시 필요 시 |

---

### 미션 4: Route Handler로 검색 API 구현하기

**목표:** Route Handler를 통해 검색 API를 프록시하고 Data Cache 활용

**요구사항:**

- `app/api/team-members/search/route.ts` 생성
- 백엔드 API를 호출하되 `force-cache` 옵션 사용
- Data Cache로 검색 결과 캐싱

**생각해볼 질문:**

1. Route Handler 파일은 어디에 생성하는가?
2. `GET` 요청을 어떻게 처리하는가?
3. 쿼리 파라미터는 어떻게 읽는가?
4. `fetch`에 `cache: 'force-cache'`를 설정하면 어떻게 되는가?
5. 태그를 붙이면 나중에 무효화할 수 있는가?

**구현 가이드:(힌트, 단순 참고용)**

```typescript
// app/api/team-members/search/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 1. 쿼리 파라미터 추출
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q") || "";

  // 2. 백엔드 API 호출 (Data Cache 사용)
  const response = await fetch(
    `http://localhost:4000/team-members/search?q=${q}`,
    {
      cache: "force-cache", // 영구 캐시
      next: {
        tags: ["team-members"], // 캐시 무효화를 위한 태그
      },
    },
  );

  const data = await response.json();

  // 3. 응답 반환
  return NextResponse.json(data);
}
```

**캐시 동작 확인:**

```
시나리오 1: "Maria" 검색
1. 첫 검색: 3초 대기 (백엔드 API 호출)
2. 재검색: 즉시 표시 (Data Cache 사용)
3. 캐시가 영구 저장됨

시나리오 2: "Noah" 검색
1. 첫 검색: 3초 대기 (새로운 검색어)
2. 재검색: 즉시 표시 (캐시됨)

시나리오 3: "Maria" 다시 검색
- 여전히 캐시에서 즉시 가져옴
```

**고민 포인트:**

```typescript
// fetch 옵션 비교

// 1. force-cache (영구 캐시)
fetch(url, { cache: "force-cache" });
// - 한 번 캐시하면 영구 저장
// - 서버 재시작 전까지 유지
// - 수동 무효화 필요

// 2. no-store (캐시 안 함)
fetch(url, { cache: "no-store" });
// - 매번 새로 요청
// - 항상 최신 데이터
// - 느림

// 3. revalidate (시간 기반)
// 3.1 라우트 핸들러에 시간 기반 검증은 적합하지 않음 (보너스 풀이 영상에서 설명)
fetch(url, { next: { revalidate: 60 } });
// - 60초마다 갱신
// - 자동 무효화

// 검색 결과에 적합한 옵션은?
// force-cache + 수동 무효화!
```

---

### 미션 5: 캐시 무효화 기능 구현하기 (Purge Cache)

**목표:** Purge Member Cache 버튼으로 캐시 삭제

**요구사항:**

- 버튼 클릭 시 'team-members' 태그의 캐시 무효화
- Server Action 사용
- 캐시 삭제 후 다음 검색 시 최신 데이터 조회

**생각해볼 질문:**

1. 캐시를 어떻게 무효화하는가?
2. `revalidateTag`는 무엇을 하는가?
3. 태그를 붙인 모든 캐시가 삭제되는가?
4. 캐시 삭제 후 즉시 재검색하면 어떻게 되는가?

**테스트 시나리오:**

```
1. "Maria" 검색 → 3초 대기 (최초 검색)
2. "Maria" 다시 검색 → 즉시 표시 (캐시 사용)
3. Purge Cache 버튼 클릭
4. "Maria" 다시 검색 → 3초 대기 (캐시 삭제됨!)
5. "Maria" 다시 검색 → 즉시 표시 (다시 캐시됨)
```

---

### 미션 7: 로딩 UI 개선하기

**목표:** 더 나은 로딩 사용자 경험 제공

**요구사항:**

- 스켈레톤 UI 표시

**구현 가이드:**

```typescript
// components/TeamMemberSkeleton.tsx
export function TeamMemberSkeleton() {
  return (
    <button className="w-full flex items-center gap-3 p-3 rounded-md transition-colors text-left hover:bg-gray-50 animate-pulse bg-gray-200" ariaLabel="Loading user information">
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      <div className="flex-1 min-w-0">
        <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded-md w-1/2 mt-1"></div>
      </div>
    </button>
  )
}
```

---

## 🔍 핵심 개념 정리

### Data Cache와 태그

```typescript
// 태그를 붙여서 캐시 저장
fetch(url, {
  cache: "force-cache",
  next: { tags: ["team-members"] },
});

// 나중에 태그로 무효화
revalidateTag("team-members"); // 해당 태그의 모든 캐시 삭제

// 여러 태그 사용 가능
fetch(url, {
  next: { tags: ["team-members", "search", "user-1"] },
});
```

### 캐시 전략 비교

| 전략           | 옵션                     | 사용 사례               | 장점      | 단점                    |
| -------------- | ------------------------ | ----------------------- | --------- | ----------------------- |
| **영구 캐시**  | `cache: 'force-cache'`   | 자주 변하지 않는 데이터 | 매우 빠름 | 수동 무효화 필요        |
| **캐시 안 함** | `cache: 'no-store'`      | 실시간 데이터           | 항상 최신 | 느림                    |
| **시간 기반**  | `revalidate: 60`         | 주기적 갱신 필요        | 자동 갱신 | 정확한 시점 제어 어려움 |
| **태그 기반**  | `tags` + `revalidateTag` | 이벤트 기반 갱신        | 유연함    | 수동 호출 필요          |

---
