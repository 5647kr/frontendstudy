import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}

export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:3000/posts2", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("네트워크 통신 오류");
        console.log(response);
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((e) => {
        console.log(e);
        if (e instanceof Error && e.name !== "AbortError") {
          setError(e.message);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

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
