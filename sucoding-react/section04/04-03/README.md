# 04-03. 이벤트 핸들러에 매개변수 전달하기

<br />

## 📑 목차

1. [전달 방법](#1-전달-방법)
2. [주의사항](#2-주의사항)

<br />

## 1. 전달 방법

아래와 같이 매개변수에도 타입을 지정해주어야 한다.

```
  const handleClick = (value: string) => console.log(value);
```

## 2. 주의 사항

아래와 같이 작성할 경우 이는 함수를 즉시 호출하는 것이기 때문에 함수로 감싸진 형태로 작성해야 한다.

```
<button onClick={handleClick("Hello")}>클릭</button>
```

## 3. 참고 파일

- App.tsx
