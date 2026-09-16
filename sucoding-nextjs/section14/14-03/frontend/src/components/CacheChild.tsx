export default async function CacheChild() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return <h1>Cache Child Contents: {randomNumber}</h1>;
}
