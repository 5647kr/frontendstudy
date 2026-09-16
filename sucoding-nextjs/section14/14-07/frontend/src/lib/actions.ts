"use server";

import { revalidateTag } from "next/cache";

export async function onDemand() {
  revalidateTag("random", "max");
}
