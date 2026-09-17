"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 min-h-[calc(100vh-60px-64px)] -translate-y-1">
      <div className="flex flex-col items-center gap-2">
        <span className="text-6xl font-bold text-destructive">!</span>
        <h1 className="text-xl font-semibold text-foreground">
          {"문제가 발생했습니다"}
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          {"일시적인 오류가 발생했습니다. 다시 시도해 주세요."}
        </p>
      </div>
      <button
        onClick={reset}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
      >
        {"다시 시도"}
      </button>
    </div>
  );
}
