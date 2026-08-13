# 04-04. 이벤트 핸들러 방법 추천

<br />

## 📑 목차

1. [전달 방법](#1-전달-방법)
2. [주의사항](#2-주의사항)

<br />

## 1. 전달 방법

아래와 같이 이벤트 전달 방법이 있다

- 방법1은 비추천한다.
- 방법2는 매개변수가 없을 때 활용한다.
- 방법3은 매개변수가 있을 때 활용한다.

```
  const handleClick2 = () => console.log("방법2");
  const handleClick3 = () => console.log("방법3");
  return (
    <div>
      <button onClick={() => console.log("방법1")}>클릭1</button>

      <button onClick={handleClick2}>클릭2</button>

      <button onClick={() => handleClick3()}>클릭3</button>
    </div>
  );
```

## 3. 참고 파일

- App.tsx
