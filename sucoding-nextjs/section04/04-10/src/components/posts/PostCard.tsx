import { User, Calendar } from "lucide-react";

export function PostCard() {
  return (
    <article className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 leading-snug capitalize">
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm">
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
        </div>

        <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-900">User 1</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>게시글 #1</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
