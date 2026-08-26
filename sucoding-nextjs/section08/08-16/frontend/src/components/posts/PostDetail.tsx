"use client";
import { ArrowLeft, Heart, Star, User } from "lucide-react";

export function PostDetail() {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <button className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>목록으로</span>
          </button>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900 flex-1">Post 1</h1>
            <button
              className="shrink-0 p-2 hover:bg-gray-100 rounded transition-colors"
              title={"즐겨찾기 해제"}
            >
              <Heart
                size={24}
                className={true ? "fill-red-400 text-red-400" : "text-gray-400"}
              />
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>User 1</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            This is the body of post 1.
          </p>
        </div>
      </div>
    </>
  );
}
