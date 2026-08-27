"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:4000/posts");
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

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
