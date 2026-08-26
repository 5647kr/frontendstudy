"use client";
import { Heart, User } from "lucide-react";

export function PostItem() {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl font-semibold text-gray-900 flex-1">Post 1</h2>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <Heart
            size={20}
            className={true ? "fill-red-400 text-red-400" : "text-gray-400"}
          />
        </button>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">
        This is the body of post 1.
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <User size={16} />
        <span>User 1</span>
      </div>
    </article>
  );
}
