# 📌 useLayoutEffect

> **한 줄 요약**: 학습한 핵심 내용이나 프로젝트의 목적을 간단히 적습니다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. 개념

useLayoutEffect는 useEffect와 굉장히 유사하다. 기능도 useEffect와 굉장히 유사하다.
둘 hook 모두 아래 두 상황일 때 effect라 불리는 콜백함수가 실행된다.

- 컴포넌트가 처음 렌더링 될 때
- 의존성 배열에 있는 값이 업데이트 될 때

useLayoutEffect는 컴포넌트를 화면에 배치하기 전, layout이나 scroll같은 ui적인 계산을 해야할 때 사용하는 편이다.

### 2. 기본 문법

```
useLayoutEffect는(() => {
  // ...
}, [state])
```

첫 번째 인자로 `() => {}` effect라 불리는 콜백함수를 전달받고 두 번째 인자로 `[state]` 의존성 배열을 전달받는다.

### 3. useEffect vs useLayoutEffect

useEffect와 useLayoutEffect의 차이점은 effect 콜백함수가 실행되는 시점이 다르다는 것이다.

useEffect는 일반적을 업데이트된 컴포넌트가 화면에 그려지고 난 뒤, effect가 실행된다.

useLayoutEffect는 useEffect와 반대로 effect가 먼저 실행 된 뒤 업데이트된 컴포넌트가 화면에 그려진다.

### 4. 기본 예제1
아래 코드와 같이 작성하였지만 useEffect 콘솔이 먼저 찍히기 보단 useLayoutEffect의 콘솔이 먼저 찍힌다.
```
  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);
```
React의 공식문서에 따르면 useEffect는 대부분의 경우 화면이 업데이트 된 이후에 실행된다고 한다. 또한 useEffect의 effect는 비동기적으로 실행된다.

반면 useLayoutEffect는 업데이트된 내용이 화면에 그려지기 이전에 실행된다고 한다. 또한 useLayoutEffect의 effect는 동기적으로 실행된다.

즉, 브라우저에 접속하게 되면 useLayoutEffect가 먼저 실행이 된 다음, 화면에 컴포넌트가 그려지고 마지막으로 useEffect가 실행된다.

## 📂 구현 코드 파일

- 📄 [`예제 1`](./src/example/Example1.tsx)
- 📄 [`예제 2`](./src/components/Example2.tsx)
