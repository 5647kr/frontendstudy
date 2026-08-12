export default function PrintValue(props: {
  numVal: number;
  strVal: string;
  boolVal: true | false;
  arrVal: number[];
  objVal: { name: string; age: number };
  fucVal: () => void;
}) {
  console.log("props:", props);
  return (
    <>
      <p>numVal: {props.numVal}</p>
      <p>strVal: {props.strVal}</p>
      <p>boolVal: {props.boolVal.toString()}</p>
      <p>arrVal: {props.arrVal}</p>
      <p>objVal: {JSON.stringify(props.objVal)}</p>
      <p>fucVal: {props.fucVal.toString()}</p>
    </>
  );
}
