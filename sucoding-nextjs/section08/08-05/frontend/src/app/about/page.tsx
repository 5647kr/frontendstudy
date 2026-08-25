export default async function AboutPage() {
  const res = await fetch("http://localhost:4000/random2", {
    cache: "force-cache",
    next: {
      tags: ["random"],
    },
  });

  const randomNumber = await res.json();
  return (
    <>
      <h1>AboutPage: {randomNumber}</h1>
    </>
  );
}
