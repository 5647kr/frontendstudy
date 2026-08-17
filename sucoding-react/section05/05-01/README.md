# 05-01. 상태가 필요한 이유

<br />

## 1. 기존 방법

리액트는 아래 코드와 같이 let 과 const 로 선언된 변수가 변경되었음을 감지하지 못한다.

이에 리액트에서는 상태로 관리해야한다.

```
export default function App() {
  let name = "mike";
  let age = 20;

  const handleChange = () => {
    name = "john";
    age = 30;
    console.log(name, age);
  };
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={handleChange}>Change</button>
    </>
  );
}
```

## 2. 주의 사항

아래와 같이 작성할 경우 이는 함수를 즉시 호출하는 것이기 때문에 함수로 감싸진 형태로 작성해야 한다.

```
<button onClick={handleClick("Hello")}>클릭</button>
```

## 3. 참고 파일

- App.tsx
