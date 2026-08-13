export default function App() {
  const handleClick = (value: string) => console.log(value);
  return (
    <>
      <button onClick={() => handleClick("Hello")}>클릭</button>
    </>
  );
}
