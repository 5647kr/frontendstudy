"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleClick = () => {
    // ... 특정 로직 수행
    // ... 라우트 전환

    router.push("/about");
    router.replace("/about");
    router.back();
    router.forward();
    router.refresh();
    router.prefetch("/about");
  };
  return (
    <>
      <button onClick={handleClick}>라우트 전환</button>
    </>
  );
}
