import Link from "next/link";

export default function SlotA() {
  return (
    <>
      <h1>SlotA</h1>
      <Link href="/dashboard/detail">SlotA Detail</Link>
    </>
  );
}