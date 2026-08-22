import { Banner } from "@/components/main/Banner";
import { PostCardError } from "@/components/posts/PostCardError";
import { PostCardSkeleton } from "@/components/posts/PostCardSkeleton";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  return (
    <>
      <Banner />
      <main className="flex-1 w-full py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <ErrorBoundary fallback={<PostCardError />}>
              <Suspense
                fallback={[1, 2, 3, 4, 5].map((v) => (
                  <PostCardSkeleton key={v} />
                ))}>
                <PostList />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </>
  );
}
