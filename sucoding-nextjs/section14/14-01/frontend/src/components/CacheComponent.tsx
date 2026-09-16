export default async function CacheComponent() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return <h1>Cache Contents: {randomNumber}</h1>;
}
