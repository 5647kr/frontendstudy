"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/api/posts");
        const posts = await res.json();
        setPosts(posts);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  return <>{posts.length > 0 && <pre>{JSON.stringify(posts, null, 2)}</pre>}</>;
}
