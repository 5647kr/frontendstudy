// interface를 사용할 경우 컴포넌트 이름에 props를 덧붙여서 명명하는 것이 관례이다.
// interface PrintValueProps {
//   numVal: number;
//   strVal: string;
//   boolVal: boolean;
//   arrVal: number[];
//   objVal: { name: string; age: number };
//   fucVal: () => void;
// }

export default function PrintValue(props: PrintValueProps) {
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
