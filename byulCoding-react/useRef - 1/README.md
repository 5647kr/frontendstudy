# 📌 useRef

> **한 줄 요약**: 학습한 핵심 내용이나 프로젝트의 목적을 간단히 적습니다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. 기본 문법

const ref = useRef(value);
함수형 컴포넌트에서 useRef를 호출하면 ref를 반환하게 되는데 ref는 {current: value}로 반한한다.
컴포넌트가 마운트되거나 언마운트되어도 값은 유지가 된다.

useRef는 크게 2가지 경우에 사용된다.

1. state와 비슷하게 어떠한 값을 저장할 떄 사용한다. 따라서 변경시 렌더링이 발생시키지 말하야 하는 경우에 사용한다.
2. DOM요소에 접근할 수 있다.

## 2. 정리

useRef는 변화감지는 필요하지만 그 변화로 인해 렌더링이 발생시키면 안되는 어떤 값을 다뤄야 할 때 사용하면 좋다.

## 📂 구현 코드 파일

- 📄 [`예제 1`](./src/components/Example1.tsx)
- 📄 [`예제 2`](./src/components/Example2.tsx)
- 📄 [`예제 3`](./src/components/Example3.tsx)
