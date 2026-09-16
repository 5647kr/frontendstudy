/* eslint-disable react-hooks/purity */
// import { connection } from "next/server";
"use cache"

export default async function UniqueContent() {
  // await connection();
  // Non-deterministic operations
  const random = Math.random();
  const now = Date.now();
  const date = new Date();
  const uuid = crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  return (
    <div>
      <p>{random}</p>
      <p>{now}</p>
      <p>{date.getTime()}</p>
      <p>{uuid}</p>
      <p>{bytes}</p>
    </div>
  );
}
