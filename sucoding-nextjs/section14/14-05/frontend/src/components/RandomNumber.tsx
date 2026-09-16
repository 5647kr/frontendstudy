"use cache";
export default async function RandomNumber() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return (
    <>
      <h1>RandomNumber: {randomNumber}</h1>
    </>
  );
}
