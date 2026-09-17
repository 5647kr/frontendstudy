import Link from "next/link";
import PostCard from "./PostCard";

export default function PostSection() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Latest Post</h2>
        <Link
          href="/blog"
          className="text-sm text-primary transition-colors hover:underline"
        >
          View All Post
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
