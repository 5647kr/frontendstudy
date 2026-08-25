export default async function AboutPage() {
  const res = await fetch("http://localhost:4000/random1", {
    cache: "force-cache",
  });
  const randomNumber = await res.json();
  return (
    <>
      <h1>AboutPage: {randomNumber}</h1>
    </>
  );
}
