import Post from "@/components/Post";
import Todo from "@/components/Todo";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  return (
    <>
      <ErrorBoundary fallback={<p>Post Error...</p>}>
        <Suspense fallback={<p>Post Loading...</p>}>
          <Post />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Todo Error...</p>}>
        <Suspense fallback={<p>Todo Loading...</p>}>
          <Todo />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
