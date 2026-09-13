import { useState, useEffect } from "react";

export default function Example1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount((count) => count + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // 렌더링 될때마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("렌더링");
  });

  // 마운팅 + count가 변화할때마다 실행됨
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  // 마운팅 + name이 변화할때마다 실행됨
  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // 마운팅 즉, 처음 렌더링 될때만 실행됨
  useEffect(() => {
    console.log("마운팅");
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCountUpdate}>Update</button>
      <br />

      <input type="text" value={name} onChange={handleInputChange} />
      <h1>{name}</h1>
    </>
  );
}
