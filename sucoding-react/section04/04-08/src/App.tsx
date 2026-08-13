import Button from "./components/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("클릭함");
    console.log(message);
    console.log(event);
  };
  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}
