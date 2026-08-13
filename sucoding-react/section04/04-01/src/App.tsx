export default function App() {
  const handleClick = () => console.log("클릭 이벤트");
  return (
    <>
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
