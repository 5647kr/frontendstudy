import { User } from "lucide-react";
import { ViewCounter } from "../buttons/ViewCounter";
import { LikeButton } from "../buttons/LikeButton";
import { CommentSection } from "../comments/CommentSection";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="border border-gray-900 hover:shadow-lg transition-shadow duration-300">
      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="font-medium text-gray-900">
              User {post.userId}
            </span>
          </div>
          <span>·</span>
          <span className="text-gray-500">Post #{post.id}</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight capitalize">
          {post.title}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="leading-relaxed">{post.body}</p>
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
          <LikeButton />
          <ViewCounter />
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50">
        <CommentSection />
      </div>
    </article>
  );
}
