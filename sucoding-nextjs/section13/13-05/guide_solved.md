# TMDB 영화 애플리케이션 - 인터셉팅 라우트 & 병렬 라우트 미션 가이드

## 🎯 미션 목표

Next.js의 고급 라우팅 기능을 활용하여 모달 방식의 영화 포스터 상세 페이지를 구현할 수 있다.

- 인터셉팅 라우트(Intercepting Routes) 개념 이해
- 병렬 라우트(Parallel Routes) 구현
- 모달 UI/UX 패턴 적용
- 뒤로가기 동작과 라우팅 통합

---

## 📋 사전 준비

### 필요한 지식

- Next.js App Router 기본 개념
- 동적 라우트 `[id]`
- Client Component vs Server Component
- Link 컴포넌트 사용법

### 최종 완성 기능

- 영화 카드 클릭 → 모달로 포스터 상세 페이지 표시
- URL은 `/poster/[id]`로 변경되지만 모달로 표시
- 직접 `/poster/[id]` URL 접속 → 전체 페이지로 표시
- ESC 키 또는 배경 클릭으로 모달 닫기
- 뒤로가기 버튼으로 모달 닫기

---

## 📝 미션 단계

### 미션 1: 포스터 상세 전용 페이지 생성하기

**목표:** 전체 페이지 형태의 포스터 상세 페이지 구현

**생각해볼 질문:**

1. 이 페이지는 언제 표시되는가?
   - 사용자가 주소창에 URL을 직접 입력하여 접속하거나, 해당 페이지에서 '새로고침'을 했을 때, 또는 모달을 지원하지 않는 환경에서 링크를 클릭했을 때 표시됩니다.

2. 모달과 전체 페이지 둘 다 같은 정보를 보여줄 건데, 왜 따로 만드는가?
   - **공유 가능성(Shareability)**과 SEO 때문입니다. 모달은 앱 내 탐색 중에만 유효한 UI입니다. 특정 영화 포스터 URL을 친구에게 공유했을 때나 검색 엔진이 정보를 수집할 때는 독립된 전체 페이지가 반드시 필요합니다.

3. 직접 URL을 입력했을 때와 앱 내에서 네비게이션했을 때를 다르게 처리할 수 있는가?
   - 네, 이것이 인터셉팅 라우트의 핵심입니다. 앱 내 탐색(Link 클릭)은 가로채서 모달로 보여주고, 직접 접속은 가로채지 않고 원본 페이지를 보여주도록 설계할 수 있습니다.

**구현 단계:**

**1.1. 폴더 및 파일 생성**

```
app/
└── poster/
    └── [id]/
        └── page.tsx
```

**1.2. page.tsx 코드 작성**

다음 코드를 `app/poster/[id]/page.tsx`에 작성하세요:

```typescript
import Image from "next/image";
import Link from "next/link";

export default async function PosterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 ">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* 포스터 이미지 */}
          <div className="relative w-full md:w-1/2 aspect-2/3">
            <Image
              src="https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
              alt="컨저링"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* 영화 정보 */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                컨저링
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The Conjuring
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  55%
                </span>
                <span className="text-muted-foreground text-sm">
                  공포, 미스터리, 스릴러 · 1h 52m
                </span>
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
                유명한 초자연 현상 수사관 부부가 새로운 악령을 마주하게 되는
                이야기
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">개봉일:</span>
                  <span className="text-foreground">2025-01-20</span>
                </p>
                <p>
                  <span className="text-muted-foreground">감독:</span>
                  <span className="text-foreground">제임스 완</span>
                </p>
                <p>
                  <span className="text-muted-foreground">출연:</span>
                  <span className="text-foreground">
                    패트릭 윌슨, 베라 파미가, 론 리빙스턴
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">제작자:</span>
                  <span className="text-foreground">수코딩 컴퍼니</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/movie/1306368"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                상세정보 보기
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                홈으로
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**스켈레톤 UI가 필요하다면**
<PosterPageSkeleton /> 컴포넌트 사용하기

**테스트:**

- [ ] 브라우저에서 `/poster/1` 접속
- [ ] 전체 페이지로 포스터 상세 정보가 표시되는가?
- [ ] 이미지가 정상적으로 로드되는가?
- [ ] "홈으로" 버튼 클릭 시 홈으로 이동하는가?

---

### 미션 2: 병렬 라우트 설정하기

**목표:** 모달을 표시하기 위한 병렬 라우트 슬롯 생성

**생각해볼 질문:**

1. 병렬 라우트(Parallel Routes)란 무엇인가?
   - 하나의 레이아웃 안에서 여러 개의 페이지(슬롯)를 동시에 렌더링할 수 있게 해주는 기능입니다.

2. `@폴더명` 형태는 무엇을 의미하는가?
   - 병렬 라우트의 '슬롯(Slot)' 이름입니다. URL 경로에는 영향을 주지 않으며, 레이아웃에서 Props로 전달받는 이름이 됩니다.

3. 병렬 라우트는 URL에 영향을 주는가?
   - 아니요. URL 구조에는 나타나지 않는 논리적인 폴더 구조입니다.

4. layout.tsx에서 병렬 라우트를 어떻게 받는가?
   - 해당 레이아웃 컴포넌트의 Props에서 슬롯 이름(예: modal)을 인자로 받아 children과 함께 배치합니다.

**병렬 라우트 개념:**

```
병렬 라우트는 같은 레이아웃 내에서
여러 페이지를 동시에 렌더링할 수 있게 해주는 기능

예시:
/dashboard
  ├── @analytics (슬롯)
  ├── @revenue (슬롯)
  └── page.tsx (메인)

→ 대시보드 페이지에 analytics와 revenue를
  동시에 표시 가능
```

**2.1. @modal 폴더 생성**

```
app/
├── @modal/
│   └── default.tsx
├── layout.tsx
└── page.tsx
```

**2.2. default.tsx 생성**

`app/@modal/default.tsx` 파일을 생성하고 다음 코드를 작성하세요:

```typescript
export default function Default() {
  return null;
}
```

**왜 default.tsx가 필요한가?**

- 병렬 라우트가 매칭되지 않을 때 표시할 기본 컨텐츠
- 모달이 열리지 않은 상태에서는 아무것도 표시하지 않음 (null)
- 없으면 404 에러 발생 가능

**2.3. layout.tsx 수정**

`app/layout.tsx`에서 `@modal` 슬롯을 받도록 수정하세요:

```typescript
export default function RootLayout({
  children,
  modal, // ⭐ 병렬 라우트 슬롯 추가
}: {
  children: React.ReactNode;
  modal: React.ReactNode; // ⭐ 타입 추가
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal} {/* ⭐ 모달 슬롯 렌더링 */}
      </body>
    </html>
  );
}
```

**고민해보기:**

```typescript
// Q: modal을 children 위에 놓으면 어떻게 되나?
// A: DOM 구조상 모달이 본문보다 앞에 위치하게 됩니다. 시각적으로는 z-index로 조절 가능하지만, 일반적으로 웹 접근성을 위해 본문 뒤에 배치하는 것이 관례입니다.
<body>
  {modal}
  {children}
</body>

// Q: modal을 렌더링하지 않으면?
// A: 인터셉팅 라우트가 작동하여 URL이 바뀌더라도, 레이아웃에 슬롯이 없으므로 화면에는 모달이 나타나지 않습니다.
<body>
  {children}
  {/* modal 렌더링 안 함 */}
</body>
```

**테스트:**

- [ ] 앱이 정상적으로 실행되는가?
- [ ] 홈 페이지가 그대로 보이는가?
- [ ] 아직 모달은 표시되지 않음 (정상)

---

### 미션 3: 인터셉팅 라우트 구현하기

**목표:** `/poster/[id]` 경로를 인터셉트하여 모달로 표시

**생각해볼 질문:**

1. 인터셉팅 라우트(Intercepting Routes)란 무엇인가?
   - 현재 페이지의 컨텍스트를 유지하면서 특정 경로로 이동할 때, 브라우저 전체를 바꾸는 대신 그 콘텐츠를 가로채서 현재 레이아웃의 슬롯에 끼워 넣는 기능입니다.

2. `(..)`, `(.)`, `(...)` 등의 규칙은 무엇인가?
   - 가로챌 대상과의 상대적 위치입니다. (.)은 동일 레벨, (..)은 한 단계 위, (...)은 루트 레벨부터의 경로를 의미합니다.

3. 왜 인터셉트가 필요한가?
   - 목록의 스크롤 위치나 데이터 상태를 유지하면서 상세 정보를 '미리보기' 형태로 제공하여, 사용자에게 끊김 없는(App-like) 경험을 주기 위해 필요합니다.

4. 직접 URL 접속 시에도 인터셉트되는가?
   - 아니요. 인터셉팅은 클라이언트 사이드 네비게이션(Link 클릭 등) 시에만 작동합니다. 직접 접속은 원본 페이지가 렌더링됩니다.

**인터셉팅 라우트 규칙:**

```
(.)  - 같은 레벨
(..) - 한 단계 위
(..)(..) - 두 단계 위
(...) - app 디렉토리 루트부터

예시:
app/
├── feed/
│   └── (..)photo/[id]  - feed에서 photo/[id] 인터셉트
└── photo/
    └── [id]/
        └── page.tsx
```

**3.1. 인터셉팅 폴더 구조 만들기**

다음 구조를 생각해보세요:

- 현재 위치: `app/@modal/`
- 인터셉트할 경로: `app/poster/[id]`
- 필요한 폴더명: `?`

**정답:**

```
app/
└── @modal/
    ├── (.)poster/
    │   └── [id]/
    │       └── page.tsx
    └── default.tsx
```

**왜 `(.)`인가?**

- `@modal`과 `poster`는 같은 레벨(`app/` 아래)
- 따라서 `(.)poster`로 인터셉트

**3.2. Modal 컴포넌트 생성**

먼저 재사용 가능한 Modal 컴포넌트를 만들어야 합니다.

`components/ui/Modal.tsx` 파일을 생성하고 다음 코드를 작성하세요:

```typescript
"use client";

import React from "react";
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto"
      >
        <button
          onClick={onDismiss}
          className="absolute -top-10 right-0 text-white hover:text-muted-foreground transition-colors z-10"
          aria-label="닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
```

**Modal 컴포넌트 분석:**

- `router.back()`: 모달 닫기 = 뒤로가기
- `overlay`, `wrapper` ref: 배경/래퍼 클릭 감지
- `ESC` 키 리스너: 키보드로 닫기
- `overflow: hidden`: 모달 열릴 때 스크롤 방지

**3.3. MovieModalContent 컴포넌트 생성**

`components/movies/MovieModalContent.tsx` 파일을 생성하고 다음 코드를 작성하세요:

```typescript
"use client";

import Image from "next/image";
import Link from "next/link";

export default function MovieModalContent() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row">
        {/* 포스터 이미지 */}
        <div className="relative w-full md:w-1/2 aspect-2/3">
          <Image
            src="https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
            alt="컨저링"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 영화 정보 */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              컨저링
            </h2>
            <p className="text-sm text-muted-foreground mb-4">The Conjuring</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                55%
              </span>
              <span className="text-muted-foreground text-sm">
                공포, 미스터리, 스릴러 · 1h 52m
              </span>
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
              유명한 초자연 현상 수사관 부부가 새로운 악령을 마주하게 되는
              이야기
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">개봉일:</span>
                <span className="text-foreground">2025-01-20</span>
              </p>
              <p>
                <span className="text-muted-foreground">감독:</span>
                <span className="text-foreground">제임스 완</span>
              </p>
              <p>
                <span className="text-muted-foreground">출연:</span>
                <span className="text-foreground">
                  패트릭 윌슨, 베라 파미가, 론 리빙스턴
                </span>
              </p>
              <p>
                <span className="text-muted-foreground">제작자:</span>
                <span className="text-foreground">수코딩 컴퍼니</span>
              </p>
            </div>
          </div>

          <Link
            href="/movie/1306368"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            상세정보 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
```

**3.4. 인터셉팅 페이지 생성**

`app/@modal/(.)poster/[id]/page.tsx` 파일을 생성하고 다음 코드를 작성하세요:

```typescript
import MovieModalContent from "@/components/movies/MovieModalContent";
import Modal from "@/components/ui/Modal";

export default async function PosterModalPage() {
  return (
    <Modal>
      <MovieModalContent />
    </Modal>
  );
}
```

**스켈레톤 UI가 필요하다면**
<PosterModalSkeleton /> 컴포넌트 사용하기

**구조 확인:**

```
app/
├── @modal/
│   ├── (.)poster/
│   │   └── [id]/
│   │       └── page.tsx  ← 인터셉팅 페이지
│   └── default.tsx
├── poster/
│   └── [id]/
│       └── page.tsx      ← 원본 페이지
└── layout.tsx
```

**테스트 (아직 Link 수정 전):**

- [ ] 폴더 구조가 정확한가?
- [ ] 컴파일 에러가 없는가?

---

### 미션 4: Link 수정하여 모달 동작 연결하기

**목표:** 영화 카드 클릭 시 모달이 열리도록 Link 수정

**생각해볼 질문:**

1. 기존 영화 카드는 어디로 링크되어 있는가?
   - 영화 상세 페이지(/movie/[id])로 연결되어 있습니다.
2. `/poster/[id]`로 링크를 변경하면 무슨 일이 일어나는가?
   - Next.js가 /poster 경로를 가로채서 @modal/(.)poster에 정의된 모달 페이지를 렌더링합니다.

3. 인터셉팅은 언제 작동하는가? (직접 URL vs 앱 내 네비게이션)
   - 앱 내 네비게이션(Link 컴포넌트 사용) 시에만 작동합니다. 직접 URL 입력은 정석적인 페이지 로드를 수행합니다

**4.1. 영화 카드의 Link 찾기**

프로젝트에서 영화 카드 컴포넌트를 찾으세요. 예를 들어:

- `components/movies/MovieCard.tsx`
- `components/movies/MovieGrid.tsx`
- 또는 홈 페이지의 영화 목록 컴포넌트

**4.2. Link href 수정**

기존 코드 (예시):

```typescript
// 수정 전
<Link href={`/movie/${movie.id}`}>
  {/* 영화 카드 내용 */}
</Link>
```

수정 후:

```typescript
// 수정 후
<Link href={`/poster/${movie.id}`}>
  {/* 영화 카드 내용 */}
</Link>
```

**동작 원리:**

```
사용자가 영화 카드 클릭
→ Next.js가 /poster/[id]로 라우팅 시도
→ @modal/(.)poster/[id]가 인터셉트
→ 모달 페이지 렌더링
→ layout의 {modal} 슬롯에 표시
→ 모달로 보임!

직접 /poster/1 URL 접속
→ 인터셉트 안 됨 (초기 로드이므로)
→ app/poster/[id]/page.tsx 렌더링
→ 전체 페이지로 보임!
```

**테스트:**

- [ ] 홈 페이지에서 영화 카드 클릭
- [ ] 모달이 열리는가?
- [ ] URL이 `/poster/[id]`로 변경되는가?
- [ ] ESC 키로 모달이 닫히는가?
- [ ] 배경 클릭으로 모달이 닫히는가?
- [ ] X 버튼으로 모달이 닫히는가?
- [ ] 뒤로가기 버튼으로 모달이 닫히는가?
- [ ] 브라우저 주소창에 `/poster/1` 직접 입력
- [ ] 전체 페이지로 표시되는가?
- [ ] 상세 페이지로 이동(movie/[id]) 하면 모달이 닫히는가? 안닫히면 어떻게 해야 하는가?

---

### 미션 5: 최종 테스트 및 검증

**목표:** 모든 시나리오에서 정상 동작 확인

**테스트 시나리오:**

**시나리오 1: 모달 열기 (인터셉팅)**

1. 홈 페이지에서 영화 카드 클릭
2. 모달이 열리는가?
3. 배경이 어두워지고 blur 효과가 적용되는가?
4. 스크롤이 비활성화되는가?
5. URL이 `/poster/[id]`로 변경되는가?

**시나리오 2: 모달 닫기**

- [ ] ESC 키로 닫기
- [ ] 배경 클릭으로 닫기
- [ ] X 버튼으로 닫기
- [ ] 브라우저 뒤로가기로 닫기
- [ ] 모든 방법으로 홈 페이지로 돌아가는가?

**시나리오 3: 전체 페이지 (인터셉팅 안 됨)**

1. 브라우저 주소창에 `/poster/1` 직접 입력
2. 전체 페이지로 표시되는가?
3. 모달이 아닌 일반 페이지인가?
4. "홈으로" 버튼이 작동하는가?
5. "상세정보 보기" 버튼이 작동하는가?

**시나리오 4: 모달에서 상세 페이지로**

1. 모달 열기
2. "상세정보 보기" 버튼 클릭
3. `/movie/[id]` 페이지로 이동하는가?
4. 모달이 닫히고 새 페이지가 표시되는가?

**시나리오 5: 브라우저 히스토리**

1. 홈 → 모달 열기 → 모달 닫기
2. 브라우저 뒤로가기 버튼 비활성화되는가?
3. 앞으로가기 시 다시 모달이 열리는가?

**일반적인 문제와 해결:**

```typescript
// 문제 1: 모달이 열리지 않음
// → @modal 슬롯이 layout에 추가되었는지 확인
// → 인터셉팅 폴더 경로가 정확한지 확인

// 문제 2: 직접 URL 접속 시에도 모달로 표시됨
// → 이것은 정상! 인터셉팅은 초기 로드에서는 작동 안 함
// → app/poster/[id]/page.tsx가 없는지 확인

// 문제 3: ESC 키가 작동하지 않음
// → Modal 컴포넌트가 'use client'인지 확인
// → useEffect의 cleanup이 제대로 되는지 확인

// 문제 4: 스크롤이 여전히 가능
// → document.body.style.overflow = "hidden" 확인
// → cleanup에서 "unset"으로 복구하는지 확인

// 문제 5: 검색이나 카테고리 더보기에서 모달이 열리면 에러 발생
// -> 검색이나 카테고리는 데이터 요청을 쿼리스트링에 의존하는데
// 인터셉트가 되면서 URL이 변경됨. 그래서 원래 페이지의 상태를 온전히 유지할 수 없음
// 따라서 쿼리스트링의 값을 고려해서 인터셉터 경로를 설정해야함
```

---

## 🔍 핵심 개념 정리

### 인터셉팅 라우트 vs 일반 라우트

```
일반 라우트:
app/photo/[id]/page.tsx
→ /photo/1 접속 시 항상 이 페이지

인터셉팅 라우트:
app/@modal/(.)photo/[id]/page.tsx
→ 앱 내 네비게이션 시 인터셉트
→ 직접 URL 접속 시 원본 페이지

두 개가 모두 존재하면:
- Link 클릭: 인터셉팅 페이지
- URL 직접 입력: 원본 페이지
```

### 병렬 라우트 슬롯

```typescript
// layout.tsx
export default function Layout({
  children,    // 기본 페이지
  modal,       // @modal 슬롯
  sidebar      // @sidebar 슬롯
}) {
  return (
    <>
      {sidebar}
      {children}
      {modal}
    </>
  )
}

// 렌더링 순서:
// 1. sidebar (왼쪽)
// 2. children (중앙)
// 3. modal (오버레이)
```

### 모달 패턴의 장점

1. **URL 공유 가능**: `/poster/1` URL을 공유하면 직접 접근 가능
2. **뒤로가기 자연스러움**: router.back()으로 모달 닫기
3. **SEO 친화적**: 전체 페이지도 존재하므로 크롤링 가능
4. **사용자 경험**: 빠른 미리보기 + 상세 페이지 옵션

## 💭 최종 고민 질문

1. **인터셉팅 라우트를 사용하지 않고 모달을 구현한다면 어떤 문제가 있을까?**
   - 모달을 열었을 때 URL이 바뀌지 않아 '뒤로 가기'를 하면 모달만 닫히는 게 아니라 이전 페이지로 이동해버립니다. 또한 새로고침 시 모달 상태가 유지되지 않습니다.

2. **모달의 URL이 변경되지 않는다면 (단순히 상태로만 관리) 어떤 단점이 있을까?**
   - 특정 영화가 열린 모달 상태를 URL로 공유할 수 없으며, 브라우저의 히스토리 기능을 활용할 수 없습니다.

3. **병렬 라우트 없이 인터셉팅만 사용할 수 있을까? 그 반대는?**
   - 병렬 라우트 없는 인터셉팅은 기존 페이지 전체를 덮어버리므로 모달을 구현할 수 없습니다. 반대로 인터셉팅 없는 병렬 라우트는 단순히 한 화면에 여러 독립된 페이지를 보여주는 용도(대시보드 등)에 적합합니다. 모달 패턴을 위해서는 두 기능의 조합이 필수입니다.

4. **이 패턴을 어떤 다른 기능에 적용할 수 있을까? (예: 장바구니, 검색 등)**
   - 로그인 창, 사진 갤러리 이미지 상세 뷰, 검색 결과 팝업, 작성 중인 게시글 임시 저장 폼 등에 적용 가능합니다.

5. **서버 컴포넌트와 클라이언트 컴포넌트를 어떻게 조합하는 것이 최선일까?**
   - 데이터 페칭 로직은 서버 컴포넌트(page.tsx)에서 처리하여 보안과 성능을 챙기고, ESC 키 감지나 배경 클릭 같은 인터랙션은 클라이언트 컴포넌트(Modal.tsx)로 분리하는 것이 가장 좋습니다.
