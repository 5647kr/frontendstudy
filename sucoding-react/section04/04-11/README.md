# 04-11. 이벤트 전파 - 캡쳐링

<br />

## 📑 목차

1. [이벤트 전파](#1-이벤트-전파)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 이벤트 전파

DOM에서 이벤트가 발생했을 떄 이벤트가 전달되는 과정을 의미한다.
이벤트 전파는 캡쳐링 -> 타켓 -> 버블링의 3가지 단계로 구성된다.
기본적으로 버블링 전파를 가지고 있어 의도적으로 캡쳐링 코드를 작성해야 한다.

`onClickCapture`을 이용해 캡쳐링을 구현할 수 있다.

```
export default function App() {
  return (
    <table border={1} onClickCapture={() => console.log("table")}>
      <tbody onClickCapture={() => console.log("tbody")}>
        <tr onClickCapture={() => console.log("tr")}>
          <td
            // 이벤트 챕쳐링
            onClickCapture={(event) => {
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
