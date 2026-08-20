"use client";

import { useSearchParams } from "next/navigation";

export default function PostDetailPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  return (
    <>
      <h1>PostDetailPage: {lang}</h1>
    </>
  );
}
