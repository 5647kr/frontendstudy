export default async function AboutDetailPage() {
  const res = await fetch("http://localhost:4000/random1", {
    cache: "force-cache",
    next: {
      tags: ["random"],
    },
  });

  const randomNumber = await res.json();
  return (
    <>
      <h1>AboutDetail: {randomNumber}</h1>
    </>
  );
}
