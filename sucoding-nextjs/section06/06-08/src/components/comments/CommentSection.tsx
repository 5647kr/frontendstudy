"use client";

import { MessageCircle } from "lucide-react";

export function CommentSection() {
  return (
    <div>
      <button className="w-full px-8 py-4 flex items-center gap-2 hover:bg-gray-100 transition-colors">
        <MessageCircle className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-900">댓글 보기</span>
      </button>

      <div className="px-8 pb-8">
        {/* 댓글 에러 */}
        {/* <CommentError /> */}

        {/* 스켈레톤 */}
        {/* <CommentSkeleton /> */}

        {/* 댓글 없음 */}
        {/* <div className="text-center py-8 text-gray-500">댓글이 없습니다.</div> */}

        {/* 댓글 */}
        <div className="space-y-6">
          <div className="border-l-2 border-gray-900 pl-4">
            <div className="flex flex-col gap-1 mb-2">
              <span className="font-medium text-gray-900">
                id labore ex et quam laborum
              </span>
              <span className="text-sm text-gray-500">Eliseo@gardner.biz</span>
            </div>
            <p className="text-gray-700">
              laudantium enim quasi est quidem magnam voluptate ipsam
              eos\ntempora quo necessitatibus\ndolor quam autem
              quasi\nreiciendis et nam sapiente accusantium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
