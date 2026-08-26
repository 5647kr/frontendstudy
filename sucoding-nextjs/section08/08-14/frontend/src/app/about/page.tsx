export const dynamic = "force-dynamic";

import Navigation from "@/components/Navigation";

export default async function AboutPage() {
  const res = await fetch("http://localhost:4000/random2");
  const randomNumber = await res.json();
  return (
    <>
      <h1>AboutPage:{randomNumber}</h1>
      <Navigation url="/" />
    </>
  );
}
