# 📌 [App Router 흐름 이해하기]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- App Router란 app 폴더를 기반으로 페이지를 구성하고 렌더링 흐름을 제어하는 방식을 뜻한다.
- Next.js는 폴더 구조와 파일 이름만으로 라우트를 자동으로 생성한다.

### 2. [규칙]

- 각 프로젝트에는 반드시 하나의 layout.tsx와 page.tsx파일이 있어야한다.
- 앱 라우터의 최상위 경로에 있는 layout.tsx 파일은 반드시 html태그와 body태그를 포함해야한다.
- 최상위가 아닌 layout.tsx 파일은 children을 반드시 포함해야한다.

```
기본 구조

<Layout>
  <Page />
</Layout>
```
