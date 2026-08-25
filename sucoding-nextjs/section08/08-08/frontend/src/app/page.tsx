export async function generateMeatadata() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return {
    title: `${randomNumber}`,
  };
}

export default async function Home() {
  const res = await fetch("http://localhost:4000/random1");

  const randomNumber = await res.json();

  const res2 = await fetch("http://localhost:4000/random1");

  const randomNumber2 = await res2.json();
  return (
    <>
      <h1>randomNumber: {randomNumber}</h1>
      <h1>randomNumber2: {randomNumber2}</h1>
    </>
  );
}
