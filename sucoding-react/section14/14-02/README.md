# 📌 [Zustand 매개변수]

> **한 줄 요약**: 매개변수 전달 및 비동기 처리도 가능하다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [매개변수 전달]

- 매개변수를 전달할 수 있다.
- 전달하려는 매개변수의 개수는 정해져 있지 않다.

**핵심 요약**: 매개변수 전달 시, 타입 지정도 잊으면 안된다.

```
CountButton.tsx

<button onClick={() => increment(5, 10)}>증가</button>
```

```
countStore.ts

interface CountStore {
  ...,
  increment: (amount: number, amount2: number) => void;
}

export const useCountStore = create<CountStore>((set) => ({
  increment: (amount: number, amount2: number) =>
    set((state) => ({ count: state.count + amount + amount2 }));

}));

```

### 2. [비동기 처리]

- zustand 내부에서 비동기처리도 가능하다.
- async await 문을 사용하면 된다.
- 함수를 객체형태로 묶어 사용하면 된다.

**핵심 요약**: async await 구문으로 비동기 처리도 가능하다.

```
countStore.ts

export const useCountStore = create<CountStore>((set) => ({
  increment: async (amount: number, amount2: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + amount + amount2 }));
  },
  ...
}));
```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
- 📄 [`CountButton.tsx`](./src/components/CountButton.tsx) - count props 전달하기
