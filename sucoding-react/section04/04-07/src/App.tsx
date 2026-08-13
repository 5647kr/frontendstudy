export default function App() {
  const handleClickA = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("click1");
    console.log(event);
  };

  const handleClickB = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(message);
    console.log(event);
  };

  return (
    <>
      <button onClick={handleClickA}>클릭1</button>
      {/* onClick={(event) <- 여기에 마우스 커서 올려보기} */}
      <button onClick={(event) => handleClickB("click2", event)}>클릭2</button>
    </>
  );
}
