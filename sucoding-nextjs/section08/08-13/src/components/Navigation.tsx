"use client";

import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation({ url }: { url: string }) {
  const router = useRouter();
  return (
    <>
      {/* <p>
        <Link href={url} prefetch={true}>
          이동({url})
        </Link>
      </p> */}
      <button
        onMouseEnter={() => router.prefetch(url, { kind: PrefetchKind.FULL })}
        onClick={() => router.push(url)}>
        이동({url})
      </button>
    </>
  );
}
