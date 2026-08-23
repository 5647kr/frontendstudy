import PostError from "@/components/posts/PostError";
import PostList from "@/components/posts/PostList";
import PostSkeleton from "@/components/posts/PostSkeleton";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-900 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Dev Blog
          </h1>
          <p className="mt-2 text-gray-600">
            Server & Client Components Data Fetching Examples
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <ErrorBoundary fallback={<PostError />}>
          <Suspense fallback={<PostSkeleton />}>
            <PostList />
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500 text-center">
            Next.js Server & Client Components Demo
          </p>
        </div>
      </footer>
    </div>
  );
}
