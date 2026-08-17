import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(0);

  const handleClick = () => {
    setState(10);
  };
  return (
    <>
      <h1>state: {state}</h1>
      <button onClick={handleClick}>set to 10</button>
    </>
  );
}
