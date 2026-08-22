"use client";

import ErrorPage from "@/components/etc/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { diget: number };
  reset: () => void;
}) {
  return (
    <>
      <ErrorPage message={error.message} onRetry={reset} />
    </>
  );
}
