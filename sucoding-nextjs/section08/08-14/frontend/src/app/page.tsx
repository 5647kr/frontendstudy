export const dynamic = "force-dynamic";

import Navigation from "@/components/Navigation";

export default async function Page() {
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return (
    <>
      <h1>Page: {randomNumber}</h1>
      <Navigation url="/about" />
    </>
  );
}
