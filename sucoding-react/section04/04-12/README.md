# 04-12. 이벤트 기본 동작 막기

<br />

## 📑 목차

1. [이벤트 동작 막기](#1-이벤트-동작-막기)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 이벤트 동작 막기

모든 HTML 태그는 기본동작이 있다 이를 막을 필요가 있다.

`preventDefault`을 이용해 기본 동작을 막을 수 있다.

```
export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <a
        href="https://ko.wikipedia.org"
        onClick={(event) => {
          event.preventDefault();
        }}>
        위키
      </a>

      <form onSubmit={(event) => event.preventDefault()}>
        <button type="submit">전송</button>
      </form>

      <form onSubmit={handleSubmit}>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
```

## 2. 참고 파일

- App.tsx
