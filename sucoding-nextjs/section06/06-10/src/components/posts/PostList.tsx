import { PostCard } from "./PostCard";

export default async function PostList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );

  const posts: Post[] = await res.json();
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
