import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김민수"];
};

export default function Example2() {
  const [names, setNames] = useState<string[]>(() => heavyWork());
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((names) => {
      console.log(names);
      return [input, ...names];
    });
    setInput("");
  };

  // console.log(input);
  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name: string, index: number) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
}
