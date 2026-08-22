"use client";

import ErrorPage from "@/components/etc/ErrorPage";
import "../styles/globals.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { diget: number };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body>
        <ErrorPage message={error.message} onRetry={reset} />
      </body>
    </html>
  );
}
