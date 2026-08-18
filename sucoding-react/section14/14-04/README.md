# 📌 [Zustand subscribeWithSelector]

> **한 줄 요약**: `subscribeWithSelector`를 이용해 상태를 구독해 변경될때마다 특정 로직을 수행할 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- 특정 상태가 변경될 때를 감지해서 특정 로직을 수행할 수 있는 구독 기능을 제공하는 미들웨어

### 2. [subscribeWithSelector 적용하기]

- persist 미들웨어를 감싸주면 된다.

```
countStore.ts

export const useCountStore = create<CountStore>()(
  subscribeWithSelector(
    persist(
      ...
    ),
  ),
);
```

### 3. [subscribeWithSelector 사용하기]

- useEffect를 이용해 필요한 컴포넌트에 적용하면 된다.
- 첫번째 매개변수는 state로 감시할 상태를 작성한다.
- 두번째 매개변수는 state가 변경되었을 때 실행될 callback 함수를 적어준다.
- 해당 callback 함수에는 변경된 최신 상태값이 들어오게 된다.

```
Count.tsx

  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log(newCount);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <CountGroup />
    </>
  );

```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
- 📄 [`Count.tsx`](./src/components/Count.tsx) - Count.tsx 파일
