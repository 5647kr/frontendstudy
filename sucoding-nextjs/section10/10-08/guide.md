# Next.js Image & Font 최적화 미션 가이드

## 🎯 미션 목표

Next.js의 Image 컴포넌트와 next/font를 활용하여 성능 최적화된 블로그 페이지를 만들 수 있다.

- next/font로 Google Fonts 최적화 및 Tailwind 통합
- 여러 폰트를 조건에 따라 적용
- `<img>` 태그를 `<Image>` 컴포넌트로 전환
- 이미지 최적화 옵션 이해 (width, height, fill 등)
- Layout Shift 방지

---

## 📋 제공 사항

### 1. 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 블로그 상세 페이지
│   └── layout.tsx        # 루트 레이아웃
└── styles/
    └── globals.css       # 전역 스타일
```

### 2. 블로그 페이지 구성 요소

- **로고 타이틀** - 상단 로고 및 사이트명
- **네비게이션** - 메뉴 링크
- **뱃지** - 카테고리
- **제목** - 블로그 포스트 제목
- **날짜** - 작성일
- **이미지** - 본문 삽입 이미지 (현재 `<img>` 태그)
- **작성자** - 작성자 프로필/이름
- **본문** - 블로그 내용
- **하단 프로필**
  - 프로필 사진 (현재 `<img>` 태그)
  - 작성자 이름 (타이틀)
  - 작성자 소개 (본문)
- **푸터** - 저작권 정보

### 3. 폰트 적용 규칙

| 요소                                | 폰트         |
| ----------------------------------- | ------------ |
| 로고 타이틀("SU")                   | Merriweather |
| 네비게이션("Blog, About, Contact")  | Merriweather |
| 뱃지("Food Theory")                 | Merriweather |
| 제목("What I Learned..")            | Merriweather |
| 날짜("DEC 1, ...")                  | Merriweather |
| 작성자("George Costanza...")        | Merriweather |
| 본문                                | Roboto       |
| 하단 프로필 타이틀 ("Written by..") | Merriweather |
| 하단 프로필 본문 ("Volutpat..")     | Roboto       |
| 하단 푸터 ("Copyright..")           | Merriweather |

---

## 📝 미션 단계

### 미션 1: next/font 이해하기

**목표:** next/font가 무엇이고 왜 사용하는지 이해

**생각해볼 질문:**

1. 전통적인 방법으로 Google Fonts를 로드하면 어떤 문제가 있는가?
2. next/font는 어떻게 폰트를 최적화하는가?
3. 폰트 로딩이 성능에 미치는 영향은?

**개념 정리:**

```typescript
// ❌ 전통적인 방법 (비효율적)
// HTML <head>에 직접 삽입
<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">

// 문제점:
// 1. 외부 요청으로 인한 지연
// 2. Layout Shift 발생 가능
// 3. 폰트 로딩 중 텍스트 깜빡임
// 4. Google 서버 의존

// ✅ next/font (최적화됨)
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

// 장점:
// 1. 빌드 타임에 폰트 다운로드
// 2. 자체 호스팅 (외부 요청 없음)
// 3. 자동 폰트 최적화
// 4. Layout Shift 방지
// 5. CSS 변수로 제공
```

---

### 미션 2: Merriweather 폰트 설정하기

**목표:** Google Fonts에서 Merriweather 폰트를 가져와 설정

**생각해볼 질문:**

1. next/font/google에서 폰트를 어떻게 import 하는가?
2. 폰트 설정 옵션들은 무엇이 있는가?
3. `weight`, `subsets`, `display` 옵션의 역할은?
4. 여러 weight를 사용하려면 어떻게 해야 하는가?

**구현 가이드:**

```typescript
// app/layout.tsx

import { Merriweather } from 'next/font/google'

// Merriweather 폰트 설정
const merriweather = Merriweather({
  weight: ['400', '700'],  // 사용할 폰트 굵기
  subsets: ['latin'],      // 필요한 문자 집합
  display: 'swap',         // 폰트 로딩 방식
  variable: '--font-merriweather'  // CSS 변수명
})

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={merriweather.variable}>
      <body>{children}</body>
    </html>
  )
}
```

**옵션 설명:**

| 옵션       | 설명       | 예시                                  |
| ---------- | ---------- | ------------------------------------- |
| `weight`   | 폰트 굵기  | `'400'` 또는 `['400', '700']`         |
| `subsets`  | 문자 집합  | `['latin']`, `['latin', 'latin-ext']` |
| `display`  | 로딩 방식  | `'swap'`, `'optional'`, `'fallback'`  |
| `variable` | CSS 변수명 | `'--font-merriweather'`               |

**display 옵션:**

```typescript
// 'swap': 폰트 로딩 완료까지 시스템 폰트 사용 → 로드 후 교체
// 'optional': 빠르면 사용, 느리면 시스템 폰트 유지
// 'fallback': swap과 유사하지만 더 짧은 대기 시간
```

---

### 미션 3: Roboto 폰트 설정하기

**목표:** 본문용 Roboto 폰트 추가 설정

**요구사항:**

- Roboto 폰트 import 및 설정
- Merriweather와 함께 사용
- 각각 다른 CSS 변수로 관리

**생각해볼 질문:**

1. 여러 폰트를 동시에 사용하려면?
2. 각 폰트를 다른 CSS 변수에 할당하려면?
3. html 태그에 여러 className을 어떻게 적용하는가?

**구현 가이드:**

```typescript
// app/layout.tsx

import { Merriweather, Roboto } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather'
})

const roboto = Roboto({
  weight: ['400', '500'],  // 본문용 일반, 중간 굵기
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${merriweather.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**고민 포인트:**

```typescript
// className 결합 방법

// 방법 1: 템플릿 리터럴
className={`${merriweather.variable} ${roboto.variable}`}

// 방법 2: 배열 join
className={[merriweather.variable, roboto.variable].join(' ')}

// 방법 3: clsx 라이브러리 (선택사항)
import clsx from 'clsx'
className={clsx(merriweather.variable, roboto.variable)}
```

---

### 미션 4: Tailwind CSS에 폰트 통합하기

**목표:** CSS 변수를 Tailwind config에 등록하여 유틸리티 클래스로 사용

**생각해볼 질문:**

1. Tailwind에서 커스텀 폰트를 어떻게 추가하는가?

**구현 가이드:**

```typescript
@import "tailwindcss";
@theme inline {
  --font-merriweather:var(--font-merriweather);
  --font-roboto:var(--font-roboto);
}
```

---

### 미션 5: 페이지에 폰트 적용하기

**목표:** Tailwind 유틸리티 클래스로 각 요소에 올바른 폰트 적용

**요구사항:**

- 로고 타이틀, 제목, 날짜, 네비게이션, 프로필 이름, 푸터 → `font-merriweather`
- 본문, 프로필 소개 → `font-roboto`

**생각해볼 질문:**

1. 기존 HTML 요소에 className을 어떻게 추가하는가?
2. 이미 다른 Tailwind 클래스가 있다면?
3. 폰트가 제대로 적용되었는지 어떻게 확인하는가?

---

### 미션 6: Image 컴포넌트 이해하기

**목표:** Next.js Image 컴포넌트의 필요성과 장점 파악

**생각해볼 질문:**

1. 일반 `<img>` 태그의 문제점은 무엇인가?
2. Next.js Image 컴포넌트는 어떤 최적화를 제공하는가?
3. Layout Shift란 무엇이고 왜 중요한가?
4. 이미지 lazy loading은 무엇인가?

**개념 정리:**

```typescript
// ❌ 일반 img 태그의 문제점
<img src="/large-image.jpg" alt="Blog image" />

// 문제:
// 1. 원본 크기 그대로 전송 (비효율적)
// 2. 최적화된 포맷(WebP) 미사용
// 3. Lazy loading 수동 구현 필요
// 4. Layout Shift 발생 (이미지 로드 전 높이 미지정)
// 5. 다양한 화면 크기 대응 어려움

// ✅ Next.js Image 컴포넌트
import Image from 'next/image'

<Image
  src="/large-image.jpg"
  alt="Blog image"
  width={800}
  height={600}
/>

// 장점:
// 1. 자동 이미지 최적화
// 2. 뷰포트에 맞는 크기로 자동 조정
// 3. 자동 lazy loading
// 4. Layout Shift 방지 (width, height로 공간 확보)
// 5. Blur placeholder 지원
```

**Layout Shift 방지 예시:**

```
Layout Shift란?
- 페이지 로딩 중 요소의 위치가 갑자기 이동하는 현상
- 사용자가 클릭하려던 버튼이 갑자기 아래로 밀려남

img 태그:
[로딩 전] 텍스트텍스트
[로딩 후] 텍스트텍스트
           [큰 이미지] ← 갑자기 삽입되어 아래 내용 밀림

Image 컴포넌트:
[로딩 전] 텍스트텍스트
           [빈 공간] ← width, height로 미리 확보
[로딩 후] 텍스트텍스트
           [이미지] ← 공간에 맞게 로드
```

**체크리스트:**

- [ ] img 태그의 문제점 이해
- [ ] Image 컴포넌트의 최적화 원리 이해
- [ ] Layout Shift가 무엇인지 이해
- [ ] lazy loading 개념 파악

---

### 미션 7: 본문 이미지를 Image 컴포넌트로 변경하기

**목표:** 블로그 본문의 `<img>` 태그를 `<Image>`로 교체

**요구사항:**

- 본문 삽입 이미지를 Image 컴포넌트로 변경
- width, height 속성 지정
- alt 텍스트 유지

**생각해볼 질문:**

1. Image 컴포넌트는 어디서 import 하는가?
2. width와 height는 어떻게 정하는가?

**width, height 정하는 방법:**

```typescript
// 방법 1: 원본 이미지 크기 확인
// - 이미지 파일 우클릭 → 속성 → 세부정보
// - 예: 1920x1080

// 방법 2: 표시하고 싶은 크기로 설정
// - 블로그 콘텐츠 영역이 800px 넓이라면
// - width={800}, height={600} (비율 유지)

// 방법 3: 비율 계산
const originalWidth = 1280;
const originalHeight = 853;
const displayWidth = 772;
const displayHeight = (originalHeight / originalWidth) * displayWidth;
// height = 514.xxx
```

---

### 미션 8: 프로필 이미지를 Image 컴포넌트로 변경하기

**목표:** 작성자 프로필 이미지도 Image 컴포넌트로 교체

**요구사항:**

- 원형 프로필 이미지 유지
- 적절한 크기 설정

**생각해볼 질문:**

1. 작은 이미지도 Image 컴포넌트를 사용해야 하는가?
2. CSS로 원형으로 만든 이미지는 Image 컴포넌트로도 가능한가?

**구현 가이드:**

```typescript
// app/page.tsx

<div className="author-profile">
  {/* ❌ 기존 img 태그 */}
  <img
    src="/author-profile.jpg"
    alt="Author profile"
    className="rounded-full w-16 h-16"
  />

  {/* ✅ Image 컴포넌트로 변경 */}
  <Image
    src="/author-profile.jpg"
    alt="Author profile"
    width={64}   // w-16 = 64px
    height={64}  // h-16 = 64px
    className="rounded-full"
  />

  <div>
    <h3 className="font-merriweather font-bold">홍길동</h3>
    <p className="font-roboto text-sm">프론트엔드 개발자</p>
  </div>
</div>
```

**실험해보기:**

- [ ] 프로필 이미지를 Image로 교체
- [ ] width, height를 Tailwind 클래스와 일치시키기
- [ ] rounded-full 클래스가 정상 작동하는지 확인

---

### 미션 9: 외부 이미지 사용하기 (선택)

**목표:** 외부 URL 이미지를 Image 컴포넌트로 사용

**생각해볼 질문:**

1. 외부 이미지(https://example.com/image.jpg)를 사용하려면?
2. next.config.js에서 설정이 필요한가?
3. `remotePatterns`는 무엇인가?

**구현 가이드:**

```typescript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
```

```typescript
// app/page.tsx

<Image
  src="https://images.unsplash.com/photo-123456789"
  alt="Unsplash image"
  width={800}
  height={600}
/>
```

---

### 미션 10: 반응형 이미지 최적화 (학습용)

- 다음 풀이 영상에서 새로운 개념을 학습하면서 도전해볼 과제입니다.
- 미션 풀이 대상이 아니므로 미션 10은 제외하고 풀어주시면 됩니다.

**목표:** 다양한 화면 크기에 맞는 이미지 제공

**생각해볼 질문:**

1. 모바일과 데스크톱에서 같은 크기 이미지를 받아야 하는가?
2. `sizes` 속성은 무엇을 하는가?
3. `fill` 속성은 언제 사용하는가?

**sizes 속성:**

```typescript
<Image
  src="/blog-image.jpg"
  alt="Blog image"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// sizes 설명:
// - 모바일(768px 이하): 화면 너비의 100%
// - 태블릿(1200px 이하): 화면 너비의 50%
// - 데스크톱: 화면 너비의 33%

// Next.js가 자동으로 적절한 크기의 이미지 생성
```

---

## 🔍 핵심 개념 정리

### next/font 동작 원리

```typescript
// 1. 빌드 타임에 폰트 다운로드
import { Roboto } from 'next/font/google'

// 2. 폰트 파일을 프로젝트에 포함
// (.next/static/fonts/)

// 3. CSS 변수로 제공
const roboto = Roboto({ variable: '--font-roboto' })

// 4. HTML에 적용
<html className={roboto.variable}>

// 5. Tailwind에서 사용
font-roboto → var(--font-roboto)

// 결과: 외부 요청 없이 빠른 폰트 로드!
```

### Image 컴포넌트 동작

```typescript
// 1. 개발자가 작성
<Image src="/image.jpg" width={800} height={600} />

// 2. Next.js가 빌드/런타임에 처리
// - 여러 크기로 이미지 생성 (480w, 750w, 1080w...)
// - WebP, AVIF 포맷으로 변환
// - 브라우저가 지원하는 최적 포맷 선택

// 3. 브라우저에 렌더링
<img
  srcset="/_next/image?url=/image.jpg&w=480 480w,
          /_next/image?url=/image.jpg&w=750 750w,
          /_next/image?url=/image.jpg&w=1080 1080w"
  sizes="100vw"
  src="/_next/image?url=/image.jpg&w=1080"
  loading="lazy"
/>
```

### 폰트와 이미지 최적화 비교

| 항목          | 전통적 방법    | Next.js 최적화 |
| ------------- | -------------- | -------------- |
| **폰트 로드** | Google CDN     | 자체 호스팅    |
| 네트워크 요청 | 매번 외부 요청 | 빌드 시 한 번  |
| FOIT/FOUT     | 발생 가능      | 자동 방지      |
| 이미지 포맷   | 원본 그대로    | WebP, AVIF     |
| 이미지 크기   | 원본 크기      | 반응형 크기    |
| Lazy Loading  | 수동 구현      | 자동 적용      |
| CLS           | 발생 위험      | 자동 방지      |
