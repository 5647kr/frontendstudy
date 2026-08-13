import Button from "./components/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("클릭함1");
    console.log(message);
    console.log(event);
    event.currentTarget.innerText = message; // 버튼 요소
    // (event.target as HTMLButtonElement).innerText = message;
  };
  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
}
