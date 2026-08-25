export default async function Page() {
  const res = await fetch("http://localhost:4000/random1", {
    cache: "force-cache",
    next: {
      tags: ["random"],
    },
  });

  const randomNumber = await res.json();
  return (
    <>
      <h1>Home: {randomNumber}</h1>
    </>
  );
}
