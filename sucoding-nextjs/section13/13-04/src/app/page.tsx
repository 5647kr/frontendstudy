import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>home</h1>
      <div className="flex items-center justify-center min-h-screen">
        <Link href="/login">
          <Button>로그인 페이지</Button>
        </Link>
      </div>
    </>
  );
}
