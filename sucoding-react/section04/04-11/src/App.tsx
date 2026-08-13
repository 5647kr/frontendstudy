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
