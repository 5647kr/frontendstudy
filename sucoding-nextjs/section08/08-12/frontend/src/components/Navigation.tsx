"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation({ url }: { url: string }) {
  const router = useRouter();
  return (
    <>
      <p>
        <Link href={url}>이동({url})</Link>
      </p>
      {/* <button onClick={() => router.push(url)}>이동({url})</button> */}
    </>
  );
}
