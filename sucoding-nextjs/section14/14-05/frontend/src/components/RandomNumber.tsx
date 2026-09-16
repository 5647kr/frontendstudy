"use cache";

import { cacheLife } from "next/cache";

export default async function RandomNumber() {
  cacheLife("minutes");
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return (
    <>
      <h1>RandomNumber: {randomNumber}</h1>
    </>
  );
}
