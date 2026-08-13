export default function App() {
  const handleClick2 = () => console.log("방법2");
  const handleClick3 = () => console.log("방법3");
  return (
    <div>
      {/* 방법1: 비추천 */}
      <button onClick={() => console.log("방법1")}>클릭1</button>

      {/* 방법2: 매개변수가 없으면 */}
      <button onClick={handleClick2}>클릭2</button>
      
      {/* 방법3: 매개변수가 있으면 */}
      <button onClick={() => handleClick3()}>클릭3</button>
    </div>
  );
}
