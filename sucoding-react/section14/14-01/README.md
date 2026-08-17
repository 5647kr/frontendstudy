# 📌 [Zustand 사용하기]

> **한 줄 요약**: 학습한 핵심 내용이나 프로젝트의 목적을 간단히 적습니다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [store 파일 생성]

- store 생성으로 zustand를 활용하여 하나의 상태들을 관리할 수 있는 단위이다.
- 해당 파일의 경우 커스텀 훅과 같이 **useXXXStore**라는 이름으로 지어주는게 관례이다.
- **핵심 요약**: 작명은 `useXXXStore`로 한다.

### 2. [create 함수]

- create 함수는 내부적으로 콜백 함수를 전달 받는다.
- 콜백 함수에서 리턴되는 객체 내용이 하나의 스토어 파일에 정의되는 상태값이 된다.
- 콜백 함수에는 `set`과 `get` 함수를 매개변수로 전달받을 수 있다.
- `set`: 자신의 스토어 파일의 데이터를 변경할 떄 사용하는 상태 변경 함수 역할
- `get`: 자신의 상태값을 가져오는 역할을 하는 함수가 매개변수로 전달하는 역할
- **핵심 요약**: `set`과 `get`을 구분해 사용한다.

```기본 구조
export const useCountStore = create((set, get) => ({}))
```

### 3. [타입 지정]

- TypeScript 기반이기에 타입을 지정해주어야 한다.
- interface로 타입을 지정한 뒤 create함수 뒤에 제네릭타입으로 타입을 지정해준다.
- **핵심 요약**: 타입은 반드시 지정해주어야 한다.

```기본 구조
interface CountStore {
  타입 지정...
}

export const useCountStore = create<CountStore>((set) => ({코드 작성...}));
```

### 4. [사용하기]

- 각각의 컴포넌트마다 필요한 코드를 사용하면 된다.
- **핵심 요약**: 작성할 중요한 포인트

```
CountDisplay.tsx
import { useCountStore } from "../store/countStore";

export default function CountDisplay() {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <h1>CountDisplay: {count}</h1>
    </>
  );
}
```

```
CountButton.tsx
import { useCountStore } from "../store/countStore";

export default function CountButton() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
- 📄 [`CountDisplay.tsx`](./src/components/CountDisplay.tsx) - count 데이터 사용하기
- 📄 [`CountButton.tsx`](./src/components/CountButton.tsx) - count 데이터 사용하기
