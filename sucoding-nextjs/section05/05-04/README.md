# 📌 [메타 데이터 설정하기 4 (react19)]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

nextjs는 react 기반 프레임워크이기 떄문에 react에서 제공하는 문법과 기능을 그대로 사용할 수 있다.
이에 react19에 새롭게 도입된 html 태그 기반 메타 데이터 설정 방식도 사용할 수 있다.

## 2. [적용 방법]

페이지 컴포넌트에 `title 태그`를 사용할 수 있다. 이는 `meta 태그, Link 태그` 역시 가능하다.
이를 활용한 것이 바로 `global-not-found` 나 `global-error` 컴포넌트이다.

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
