# 📌 [Zustand persist]

> **한 줄 요약**: `persist`를 이용한 storage로 데이터를 저장해 새로고침해도 데이터를 유지시킬 수 있다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [persist 사용 이유]

- 새로고침을 하면 값이 유지되지 않는다.
- 상태를 새로고침해도 유지하기 위해 로컬 스토리지나 세션 스토리지를 이용한다.
- zustand는 이러한 스토리지 작업을 대신 해주는 미들웨어(middleware) 기능을 제공한다.

**핵심 요약**: 새로고침을 하면 데이터를 유지할 수 없다.

### 2. [persist 사용하기]

- create 함수의 매개변수로 전달한 callback 함수를 persist로 감싼다.
- 두번째 매개변수로 콤마를 찍은 뒤 객체를 지정해 주면 된다.
- 함수를 객체형태로 묶어 사용하면 된다.
- 기본값은 localStorage이다.
- 타입에러가 나는데 이를 해결하기 위해 제네릭 타입뒤에 소괄호를 열고 닫기만 하면 된다.

**핵심 요약**: persist를 활용해 storage를 이용할 수 있다.

```
countStore.ts

export const useCountStore = create<CountStore>()(persist
((set) => ({
  ...
  }),
  {name: "스토리지 이름", storage: createJSONStorage(() => sessionStorage)}
  )
) ;
```

---

## 📂 구현 코드 파일

- 📄 [`countStore.ts`](./src/store/countStore.ts) - store 파일
