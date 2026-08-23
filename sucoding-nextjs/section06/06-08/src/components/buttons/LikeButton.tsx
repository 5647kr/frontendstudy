"use client";

import { Heart } from "lucide-react";

export function LikeButton() {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
      {/* 하트 체크됨: fill-gray-900 text-gray-900 */}
      {/* 하트 체크안됨:  text-gray-600*/}
      <Heart className={`w-5 h-5 transition-all text-gray-600}`} />
      <span className="font-medium text-gray-900">0</span>
    </button>
  );
}
