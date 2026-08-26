import { PostItem } from "@/components/posts/PostItem";
import { Pagination } from "@/components/Pagination";

export default async function PostPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        <PostItem />
      </div>
      <div className="mt-8">
        {/* totalSize props로 총 게시물 갯수만 넘기면 자동 페이지네이션 구성 */}
        <Pagination />
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        총 10개의 게시글
      </div>
    </main>
  );
}
