export default function PrintValue({
  // 비구조화
  numVal,
  strVal,
  boolVal,
  arrVal,
  objVal,
  fucVal,
}: {
  numVal: number;
  strVal: string;
  boolVal: true | false;
  arrVal: number[];
  objVal: { name: string; age: number };
  fucVal: () => void;
}) {
  return (
    <>
      <p>numVal: {numVal}</p>
      <p>strVal: {strVal}</p>
      <p>boolVal: {boolVal.toString()}</p>
      <p>arrVal: {arrVal}</p>
      <p>objVal: {JSON.stringify(objVal)}</p>
      <p>fucVal: {fucVal.toString()}</p>
    </>
  );
}
