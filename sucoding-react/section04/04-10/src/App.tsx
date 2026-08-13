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
