"use server";

import { updateTag } from "next/cache";

export async function cacheRemove() {
  updateTag("team-members");
}
