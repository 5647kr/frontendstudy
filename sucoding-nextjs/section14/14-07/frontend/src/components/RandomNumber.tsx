"use cache";

import { cacheLife, cacheTag } from "next/cache";

export default async function RandomNumber() {
  cacheLife("minutes");
  cacheTag("random", "number") // 태그 1개당 256자, 총 128개
  const res = await fetch("http://localhost:4000/random1");
  const randomNumber = await res.json();
  return (
    <>
      <h1>RandomNumber: {randomNumber}</h1>
    </>
  );
}
