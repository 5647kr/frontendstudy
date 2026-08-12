export default function App() {
  const strVal = "hello world";
  const numVal = 10;
  const boolVal = false;
  const undefinVal = undefined;
  const nullVal = null;
  const symbolVal = Symbol("Symbol");
  const bigIngVal = 9999999999999999n;

  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자: {strVal}</p>
      <p>숫자: {numVal}</p>
      <p>불리언: {boolVal.toString()}</p>
      <p>undefined: {String(undefinVal)}</p>
      <p>null: {String(nullVal)}</p>
      <p>Symbol: {String(symbolVal)}</p>
      <p>BigInt: {bigIngVal}</p>
    </>
  );
}
