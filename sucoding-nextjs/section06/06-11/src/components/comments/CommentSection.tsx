"use client";

import { MessageCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import CommentSkeleton from "./CommentSkeleton";
import CommentError from "./CommentError";

export function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comments[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );

      if (!response.ok) {
        throw new Error("데이터 요청 실패");
      }

      const data = await response.json();

      setComments(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  const renderContent = () => {
    if (isLoading) {
      return <CommentSkeleton />;
    }

    if (isError) {
      return <CommentError />;
    }

    if (comments.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">댓글이 없습니다.</div>
      );
    }

    return (
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-2 border-gray-900 pl-4">
            <div className="flex flex-col gap-1 mb-2">
              <span className="font-medium text-gray-900">{comment.name}</span>
              <span className="text-sm text-gray-500">{comment.email}</span>
            </div>
            <p className="text-gray-700">{comment.body}</p>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (isExpanded) {
      fetchComments();
    }
  }, [isExpanded, fetchComments]);
  return (
    <div>
      <button
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        className="w-full px-8 py-4 flex items-center gap-2 hover:bg-gray-100 transition-colors">
        <MessageCircle className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-900">
          {isExpanded ? "댓글 숨기기" : "댓글 보기"}
        </span>
      </button>

      {isExpanded && <div className="px-8 pb-8">{renderContent()}</div>}
    </div>
  );
}
