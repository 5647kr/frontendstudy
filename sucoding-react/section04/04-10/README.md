# 04-10. 이벤트 전파 - 버블링

<br />

## 📑 목차

1. [이벤트 전파](#1-이벤트-전파)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 이벤트 전파

DOM에서 이벤트가 발생했을 떄 이벤트가 전달되는 과정을 의미한다.
이벤트 전파는 캡쳐링 -> 타켓 -> 버블링의 3가지 단계로 구성된다.
기본적으로 버블링 전파를 가지고 있다.

```
export default function App() {
  return (
    <table border={1} onClick={() => console.log("table")}>
      <tbody onClick={() => console.log("tbody")}>
        <tr onClick={() => console.log("tr")}>
          <td
            onClick={(event) => {
              // 버블링을 차단한다.
              event.stopPropagation();
              console.log("td");
            }}>
            mike
          </td>
        </tr>
      </tbody>
    </table>
  );
}

```

## 2. 참고 파일

- App.tsx
