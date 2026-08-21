"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest: number };
  reset: () => void;
}) {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={reset}>reset</button>
    </>
  );
}
