"use client";

import { revalidate } from "../lib/actions/server";

export default function RevalidateBtn() {
  return (
    <>
      <button onClick={revalidate}>무효화 (재검증)</button>
    </>
  );
}
