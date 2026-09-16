export default async function DynamicComponent() {
  const res = await fetch("http://localhost:4000/random2");
  const randomNumber = await res.json();
  return <h1>Dynamic Contents: {randomNumber}</h1>;
}
