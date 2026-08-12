import PrintValue from "./components/PrintValue";

export default function App() {
  const numVal = 30;
  const strVal = "hello world";
  const BoolVal = true;
  const arrVal = [1, 2, 3, 4];
  const objVal = { name: "hong", age: 30 };
  const fucVal = () => console.log("함수 실행");

  return (
    <>
      {/* numVal에 마우스를 호버해보세요. */}
      <PrintValue
        numVal={numVal}
        strVal={strVal}
        boolVal={BoolVal}
        arrVal={arrVal}
        objVal={objVal}
        fucVal={fucVal}
      />
    </>
  );
}
