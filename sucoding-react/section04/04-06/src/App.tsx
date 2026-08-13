import { ButtonA, ButtonB, ButtonC } from "./components/Button";

export default function App() {
  const handleClickC = (message: string) => {
    console.log(message);
  };

  return (
    <>
      <ButtonA handleClickA={() => console.log("play MovieA")}>
        Play MovieA
      </ButtonA>
      <ButtonA handleClickA={() => console.log("Upload ImageA")}>
        Upload ImageA
      </ButtonA>

      {/* 매개변수 할당 */}
      <ButtonB
        handleClickB={(message: string) => console.log(message)}
        message="Play MovieB">
        Play MovieB
      </ButtonB>
      <ButtonB
        handleClickB={(message: string) => console.log(message)}
        message="Upload ImageB">
        Upload ImageB
      </ButtonB>

      {/* 별도 함수 적용 */}
      <ButtonC handleClickC={handleClickC} message="Play MovieC">
        Play MovieC
      </ButtonC>
      <ButtonC handleClickC={handleClickC} message="Upload ImageC">
        Upload ImageC
      </ButtonC>
    </>
  );
}
