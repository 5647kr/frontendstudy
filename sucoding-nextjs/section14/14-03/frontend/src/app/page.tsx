"use cache";
export default async function Page() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();

  return (
    <>
      <h1>Random Number: {randomNumber}</h1>
    </>
  );
}
