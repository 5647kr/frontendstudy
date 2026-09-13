import { useState } from "react";

export default function Example1() {
  const [time, setTime] = useState<number>(1);

  const handleClick = () => {
    // setTime((time) => time + 1);
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  console.log("업데이트!");
  return (
    <>
      <h1>현재 시각: {time}시</h1>
      <button onClick={handleClick}>Update</button>
    </>
  );
}
