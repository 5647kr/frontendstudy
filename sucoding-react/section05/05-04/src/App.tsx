import { useState } from "react";

export default function App() {
  const [name, setName] = useState<string>("jack");
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleChange = () => {
    setName("John");
    setAge(30);
    setGender("female");
  };
  return (
    <>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>gender: {gender}</h1>
      <button onClick={handleChange}>Update Profile</button>
    </>
  );
}
