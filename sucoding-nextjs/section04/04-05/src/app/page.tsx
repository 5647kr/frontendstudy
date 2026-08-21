import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Page</h1>
      <Link href={"/about"}>ABOUT</Link>
    </>
  );
}
