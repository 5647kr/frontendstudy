"use client";

import { Eye } from "lucide-react";

export function ViewCounter() {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <Eye className="w-5 h-5" />
      <span className="font-medium">0</span>
    </div>
  );
}
