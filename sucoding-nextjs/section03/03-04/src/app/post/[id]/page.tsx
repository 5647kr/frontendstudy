"use client";

import { useParams } from "next/navigation";

export default function PostDetailPage() {
  const { id } = useParams();
  return (
    <>
      <h1>PostDetailPage: {id}</h1>
    </>
  );
}
