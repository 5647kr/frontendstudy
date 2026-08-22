import { getPosts } from "@/services/api";
import { PostCard } from "./PostCard";

export default async function PostList() {
  const posts: Post[] = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
