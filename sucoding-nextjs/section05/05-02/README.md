# 📌 [메타 데이터 설정하기 2 (title, absolute, default)]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

메타데이터를 사용할 떄는 같은 속성이 여러 곳에서 중복 정의될 수 있다.
nextjs에서는 먼저 적용되는 메타데이터일수록 우선순위가 높다는 특징이 있다.

## 2. [적용 순서]

nextjs 렌더링 과정에서 페이지 컴포넌트가 먼저 평가되고 이후 레이아웃이 감싸지는 구조로 동작하기 떄문에 페이지 컴포넌트에 설정되어있는 메타데이터 속성의 값이 적용되게 된다. title 속성 이외에 다른 데이터 모두 사용이 가능하다.

이러한 메타데이터의 일관성을 위해 `template`, `default`, `absolute` 3가지 속성을 지원한다.

## 3. [template, default, absolute]

- template: 일관된 속성의 값을 지정할 떄 사용한다.
  - 보통 RootLayout의 타이틀 속성에 지정한다.
  - title을 객체로 만든뒤, template 속성을 이용한다.
  - title이 자유롭게 변경될 수 있도록 %s 키워드 뒤에 일관된 title값을 지정한다.
  - title이 없을 수 있기 떄문에 default 속성을 반드시 넣어 title 값을 지정한다.
  - template는 하위 경로에만 적용된다. 그렇기 때문에 RootLayout과 같은 page.tsx에는 별도로 지정해주어야 한다.

```
RootLayout.tsx

  title: { template: `%s | nextjs`, default: "홈페이지" },


/page.tsx
  title: "홈페이지 | nextjs",
```

- absolute: template의 영향을 받지 않고 독립적인 값을 적용하고 싶을 떄 사용하는 속성이다.

```
  title: {
    absolute: "Login Page"
  },
```

---

## 📂 구현 코드 파일

- 📄 [`layout.tsx`](./src/app/layout.tsx)
- 📄 [`login.tsx`](./src/app/login/page.tsx)
