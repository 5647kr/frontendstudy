# 📌 [서버 컴포넌트에서 데이터 패치 - 영역별 로딩/에러 처리]

> **한 줄 요약**: 학습한 핵심 내용이나 프로젝트의 목적을 간단히 적습니다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

nextjs에서 데이터 패칭시엔 로딩 전략과 에러 핸들링 전략을 함께 설계하는 것이 중요하다.

이에 `Post.tsx`와 `Todo.tsx`에는 각각 4초의 지연과 2초의 지연 시간을 가지고 있다. 이때 4초 2초해서 총 6초의 지연이 있는것이 아닌 4초 2초가 서로 `병렬적으로 진행`되어 총 4초의 지연 시간이 걸린다.

- 개념 설명 및 주요 특징
- **핵심 요약**: 작성할 중요한 포인트

```code
// 핵심 코드 예시 작성
console.log("Hello, World!");
```

### 2. [loading.tsx]

loading.tsx 파일로 로딩 처리를 할 수 있지만 이는 파일 단위가 아닌 경로 단위로 동작한다. 즉 App Router의 최상위 경로에 loading.tsx를 생성하면 page.tsx에서 렌더링 되는 Post.tsx, Todo.tsx를 개별적으로 처리하는것이 아닌 루트 경로라는 전체에 대한 UI 만 처리해준다.

따라서 Post.tsx와 Todo.tsx의 로딩 UI 를 서로 다르게 보여주려면 로트 경로의 loading.tsx 파일을 제거 한 뒤, 개별적으로 Suspense를 적용해주어야 한다.

```
<Suspense fallback={<p>Post Loading...</p>}>
  <Post />
</Suspense>
<Suspense fallback={<p>Todo Loading...</p>}>
  <Todo />
</Suspense>
```

- **핵심 요약**: `loading.tsx`는 경로 전체의 로딩 UI를 관리한다면 `Suspense`는 컴포넌트 단위 로딩 UI를 제어한다.

이는 error도 마찬가지이다.

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
- 📄 [`Post.tsx`](./src/components/Post.tsx)
- 📄 [`Todo.tsx`](./src/components/Todo.tsx)
