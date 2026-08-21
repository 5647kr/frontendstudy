"use client";

export default function Page() {
  // eslint-disable-next-line react-hooks/purity
  const randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    throw new Error("1이다.");
  }
  return (
    <>
      <h1>Page</h1>
    </>
  );
}
