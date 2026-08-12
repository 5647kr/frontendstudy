export default function App() {
  const arrVal = [1, 2, 3, 4];
  const objVal = { name: "hong", age: 30 };
  const fucVal = () => "함수의 리턴 값";
  const dateVal = new Date();
  const regVal = /react/i;
  const mapVal = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const setVal = new Set([1, 2, 3, 4]);

  return (
    <>
      <p>배열: {arrVal}</p>
      <p>객체: {JSON.stringify(objVal)}</p>
      <p>함수: {fucVal.toString()}</p>
      <p>date: {dateVal.toString()}</p>
      <p>정규식: {regVal.toString()}</p>
      <p>map: {JSON.stringify(Array.from(mapVal))}</p>
      <p>set: {JSON.stringify(Array.from(setVal))}</p>
    </>
  );
}
