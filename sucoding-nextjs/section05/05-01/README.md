# 📌 [메타 데이터 설정하기 1]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

메타데이터는 페이지나 애플리케이션에 대한 여러 정보를 선언적으로 설정하는 기능이다.
nextjs에서는 메타데이터 api를 제공한다.

## 2. [기본 사용 방법]

RootLayout.tsx에 metadata라는 변수에 객체가 할당되어있다.

- title: 브라우저 탭의 제목
- description: 브라우저에 대한 요약 정보

메타 데이터 api는 반드시 `metadata`라는 변수로 지정해줘야 한다. 또한 metadata는 오로지 `서버 컴포넌트`에서만 사용할 수 있다.

## 3. [metadata 적용 범위]

layout.tsx에 metadata를 설정할 경우 layout.tsx를 공유하는 모든 page.tsx파일에 적용되지만 만약 page.tsx에 metadata를 적용한다면 해당 파일에만 metadata가 적용된다.

---

## 📂 구현 코드 파일

- 📄 [`layout.tsx`](./src/app/layout.tsx)
