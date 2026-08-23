"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        await new Promise((r) => setTimeout(r, 3000));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
        );

        if (!response.ok) {
          throw new Error("Failed to Fetch");
        }

        const data = await response.json();
        setPost(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}
