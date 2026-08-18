# 📌 [Zustand immer]

> **한 줄 요약**: `immer`를 이용해 쉽게 불변성을 지킬 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

- zustand의 상태 업데이트 함수에서는 불변성을 지켜줘야 한다는 규칙이 있다.
- 이를 지키기 위해 상태 업데이트 함수를 사용할 때도 새로운 객체를 만들어 그 값을 반환하는 형태로 코드를 작성한다.
- 이를 지키기 위해 매번 새로운 객체를 반환하는 방식은 가독성및 유지보수성이 떨어진다.

**핵심 요약**: 이를 해결하기 위해 `immer`라는 middelware를 제공한다.

```
countStore.ts

set((state) => ({ count: state.count - 1 }))
set((state) => ({ count: 0 }))
```

### 2. [immer 적용하기]

- 사용자가 불변성을 고려하지 않아도 자동으로 불변성을 처리해 주는 middleware이다.
- immer를 사용하기 위해 패키지를 설치해야한다.
- subscribeWithSelector를 감싸는 것이 아닌 set 함수가 callback함수로 전달되는 함수 덩어리를 감싸주면 된다.

```
countStore.ts

export const useCountStore = create<CountStore>()(
    persist(
      immer((set) => ({
        ...
      }))
    ),
);
```

### 3. [immer 코드 변경]

- 아래 예제 코드와 같이 수정이 가능하다.

```
countStore.ts

set((state) => ({ state.count += amount + amount2 }))
set((state) => ({ state.count -= 1 }))
set((state) => ({ state.count = 0 }))
```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
