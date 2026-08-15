import axios from "axios";
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}

export default function Axios() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const axiosPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/posts", {
          signal: controller.signal,
        });

        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") {
          setError(e.message);
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    axiosPosts();
    return () => controller.abort();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {posts.map((post: Posts) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
