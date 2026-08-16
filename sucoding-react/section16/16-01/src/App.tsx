import axios from "axios";
import { useEffect, useState, useTransition } from "react";

interface Post {
  id: number;
  title: string;
  views: number;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // react 19부터 async await 사용 가능
    startTransition(async () => {
      const { data } = await axios.get("http://localhost:3000/posts");

      setPosts(data);
    });
  }, []);

  if (isPending) return <p>Loading...</p>;
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
