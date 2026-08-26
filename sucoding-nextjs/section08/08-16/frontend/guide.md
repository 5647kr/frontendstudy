# Next.js 캐싱 미션 과제

## 🎯 학습 목표

Next.js의 4가지 캐싱 메커니즘을 이해하고 적절히 활용할 수 있다.

- Data Cache
- Full Route Cache
- Router Cache
- Request Memoization
- Cache Revalidation (캐시 무효화)

---

## 📋 제공 사항

### 1. 백엔드 API 서버

`server.js` 파일을 제공합니다.  
 `backend` 폴더로 이동 후 `npm install` > `npm run dev`로 실행하세요.

**API 명세:**

| Method | Endpoint          | Query Parameters                               | Request Body          | Response                                   | Headers                         |
| ------ | ----------------- | ---------------------------------------------- | --------------------- | ------------------------------------------ | ------------------------------- |
| GET    | `/posts`          | `_page` (default: 1)<br>`_limit` (default: 10) | -                     | Post 배열                                  | `X-Total-Count`: 전체 게시물 수 |
| GET    | `/posts/:id`      | -                                              | -                     | Post 객체                                  | -                               |
| PATCH  | `/posts/:id/like` | -                                              | `{ liked?: boolean }` | `{ ok: true, id: number, liked: boolean }` | -                               |

**Post 객체:**

```typescript
{
  id: number;
  userId: number;
  title: string;
  body: string;
  liked: boolean; // 좋아요 상태
}
```

**좋아요 API 동작:**

- Body에 `{ liked: true }` 전송 → 좋아요 설정
- Body에 `{ liked: false }` 전송 → 좋아요 해제
- Body 없음 또는 `{}` → 현재 상태 토글

### 2. 기본 퍼블리싱 파일

- 정적 메인 페이지 HTML/CSS
- Post 목록 페이지 마크업 (좋아요 버튼 포함)
- Post 상세 페이지 마크업

---

## 📝 과제 요구사항

### Step 1: 프로젝트 준비 및 파악

1. 제공된 초기 코드의 프로젝트 구조를 파악하기
2. 구성된 라우트 구조:
   - `/` - 메인 페이지
   - `/post` - Post 목록 페이지
   - `/post/[id]` - Post 상세 페이지

---

### Step 2: Post 목록 페이지 구현 (Data Cache 학습)

**요구사항:**

- `/post` 경로에서 API로부터 게시물 목록을 가져와 표시
- 각 게시물마다 좋아요 상태 표시 (하트 아이콘)
- 페이지네이션 구현 (페이지당 10개)
- URL 쿼리 파라미터로 페이지 번호 관리 (예: `/posts?page=2`)

**생각해볼 질문:**

1. 데이터를 가져올 때 `fetch`를 사용한다면, 기본 캐싱 동작은 무엇인가?
2. 매번 최신 데이터를 가져오려면 어떤 옵션을 설정해야 하는가?
3. 60초마다 데이터를 갱신하려면 어떻게 해야 하는가?
4. `npm run build` 실행 시 이 페이지는 어떻게 표시되는가? (○, λ, ●)

---

### Step 3: 라우터 캐시 최적화 (Router Cache 학습)

**요구사항:**

- 목록 페이지에서 각 게시물 제목을 클릭하면 상세 페이지로 이동
- Next.js의 `Link` 컴포넌트 또는 router 인스턴스 객체 사용

**생각해볼 질문:**

1. `Link` 컴포넌트의 기본 동작은 무엇인가?
2. 사용자가 링크 위에 마우스를 올렸을 때 어떤 일이 발생하는가?
3. Network 탭에서 무엇을 확인할 수 있는가?
4. prefetch 동작을 비활성화하려면 어떻게 해야 하는가?

---

### Step 4: Post 상세 페이지 구현 (Request Memoization 학습)

**요구사항:**

- `/posts/[id]` 경로에서 해당 게시물의 상세 정보 표시
- 좋아요 상태 표시
- 브라우저 탭 제목을 게시물 제목으로 설정 (metadata)

**생각해볼 질문:**

1. metadata를 생성하기 위해 데이터를 fetch하고, page 컴포넌트에서도 같은 데이터를 fetch한다면 API가 몇 번 호출되는가?
2. Request Memoization은 언제 작동하는가?
3. 같은 데이터를 여러 컴포넌트에서 가져와야 한다면 어떻게 해야 하는가?

### Step 5: 좋아요 기능 구현 (Cache Revalidation 학습)

**요구사항:**

- 목록 페이지와 상세 페이지 모두에 좋아요 버튼 구현
- 좋아요 버튼 클릭 시:
  1. API에 좋아요 상태 업데이트 요청
  2. 캐시된 데이터 갱신하여 UI에 즉시 반영
  3. 목록 페이지에서 좋아요 토글 시, 해당 게시물의 상세 페이지 캐시도 갱신

**생각해볼 질문:**

1. Server Component에서 사용자 인터랙션(클릭)을 어떻게 처리하는가?
2. Server Action이란 무엇이고 어떻게 사용하는가?
3. 데이터가 변경된 후 캐시를 무효화하려면 어떤 함수를 사용해야 하는가?
4. `revalidatePath`와 `revalidateTag`의 차이는 무엇인가?
5. 특정 경로의 캐시만 무효화할 수 있는가, 아니면 전체 캐시가 무효화되는가?

---

### Step 6: 정적 메인 페이지 (Full Route Cache 학습)

**요구사항:**

- `/` 경로의 메인 페이지는 순수 정적 콘텐츠
- Posts 목록으로 이동하는 링크 포함

**생각해볼 질문:**

1. 이 페이지는 언제 생성되는가?
2. `npm run build` 실행 시 어떤 파일이 생성되는가?
3. 빌드 결과에서 어떤 마크가 표시되는가?
4. 동적 함수(searchParams, params 등)를 사용하면 어떻게 되는가?

---

## 💡 캐시 무효화 전략 비교 참고

| 방법                                   | 사용 시점                   | 범위                 | 예시               |
| -------------------------------------- | --------------------------- | -------------------- | ------------------ |
| `revalidatePath('/post')`              | 특정 경로의 데이터가 변경됨 | 해당 경로만          | 목록 페이지 갱신   |
| `revalidatePath('/post/[id]', 'page')` | 특정 동적 경로              | 특정 상세 페이지만   | 1개 게시물 갱신    |
| `revalidatePath('/post', 'layout')`    | 하위 모든 경로              | 레이아웃 하위 전체   | 목록 + 모든 상세   |
| `revalidateTag('posts')`               | 태그 기반 캐시 관리         | 태그 붙은 모든 fetch | 관련된 모든 데이터 |
