"use client";

import { onDemand } from "@/lib/actions";
// import { revalidateTag, updateTag } from "next/cache";

export default function Ondemand() {
  return (
    <>
      {/* <form
        action={async () => {
          "use server";
          // revalidateTag("random", "max");
          updateTag("random", "max");
        }}>
        <button>On-demand loaded</button>
      </form> */}

      <form>
        <button type="button" onClick={() => onDemand()}></button>
      </form>
    </>
  );
}
