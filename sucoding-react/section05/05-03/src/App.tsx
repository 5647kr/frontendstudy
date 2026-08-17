import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number | string>(0);
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleClick = () => {
    setState("10");
    setIsShow(false);
  };
  return (
    <div>
      <p>state: {state}</p>
      <p>state: {isShow.toString()}</p>
      <button onClick={handleClick}>set to 10</button>
    </div>
  );
}
