# 📌 [Zustand dentools]

> **한 줄 요약**: `devtools`를 활용해 개발모드에서 도구를 사용할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- 가벼운 전역상태 라이브러리기에 별도의 devtools를 제공 하지 않는다.
- 원할 경우 Redux devtools와 연동할 수 있다.

### 2. [devtools 적용하기]

- subscribeWithSelector를 포함하여 devtools로 감싸주면 된다.

```
countStore.ts

  devtools(
    subscribeWithSelector(
      persist(
        immer((set) => ({
          ...
        })),
      ),
    )
  ),
```

### 3. [devtools의 두번째 옵션]

- 개발모드에서는 사용하고 배포후엔 없애고 싶을때 사용한다.
- 2번째 옵션으로 객체를 생성한 뒤 enable 속성을 false로 지정한다.
- 자동으로 true/false를 설정할 수 있다.

```
countStore.ts

  devtools(
    subscribeWithSelector(
      persist(
        immer((set) => ({
          ...
        })),
      ),
    ),
    {
      enabled: false,
      enabled: import.meta.env.MODE === "development"
    },
  ),
```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
