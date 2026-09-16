## 왜 예측이 안 될까?

### 1. `params`

```tsx
const { id } = await params;

// 예측 불가능한 이유:
// - /page/1 -> id = "1"
// - /page/2 -> id = "2"
// → 요청마다 다른 값!
```

### 2. `searchParams`

```tsx
const { id } = await searchParams;

// 예측 불가능한 이유:
// - /page?id=1 → id = "1"
// - /page?id=2 → id = "2"
// - /page → id = undefined
// → 요청마다 다른 값!
```

### 3. `cookies()`

```tsx
const cookieStore = await cookies();

// 예측 불가능한 이유:
// - 사용자 A: { theme: "dark", session: "abc123" }
// - 사용자 B: { theme: "light", session: "xyz789" }
// - 사용자 C: (쿠키 없음)
// → 사용자마다 다른 값!
```

### 4. `headers()`

```tsx
const headerStore = await headers();

// 예측 불가능한 이유:
// - 브라우저 A: { user-agent: "Chrome/120.0..." }
// - 브라우저 B: { user-agent: "Safari/17.0..." }
// - 모바일: { user-agent: "iPhone..." }
// → 클라이언트마다 다른 값!
```

## 공통점: 모두 Request에서 옴

```tsx
HTTP 요청 구조:

GET /page?id=123 HTTP/1.1              ← searchParams
Host: example.com
User-Agent: Chrome/120.0               ← headers()
Authorization: Bearer token123         ← headers()
Cookie: theme=dark; session=abc        ← cookies()
Accept-Language: ko-KR                 ← headers()

→ 이 모든 정보는 "요청이 들어올 때" 비로소 알 수 있음!
```
