"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko" className="dark">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(222 47% 11%)",
          color: "hsl(213 31% 91%)",
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "3.75rem",
                fontWeight: 700,
                color: "hsl(0 84% 60%)",
              }}
            >
              !
            </span>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
              {"심각한 오류가 발생했습니다"}
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                textAlign: "center",
                color: "hsl(215 20% 55%)",
              }}
            >
              {"예상치 못한 오류입니다. 다시 시도해 주세요."}
            </p>
          </div>
          <button
            onClick={reset}
            style={{
              borderRadius: "0.5rem",
              backgroundColor: "hsl(217 91% 60%)",
              padding: "0.625rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {"다시 시도"}
          </button>
        </div>
      </body>
    </html>
  );
}
