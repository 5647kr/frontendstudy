export default function App() {
  let name = "mike";
  let age = 20;

  const handleChange = () => {
    name = "john";
    age = 30;
    console.log(name, age);
  };
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={handleChange}>Change</button>
    </>
  );
}
