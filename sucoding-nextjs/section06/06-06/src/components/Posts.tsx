"use client";

import { useState } from "react";

export default function Posts({ data }: { data: Post }) {
  const [post, setPost] = useState(data);
  const otherPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2",
    );

    const data = await response.json();
    setPost(data);
  };
  return (
    <>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button onClick={otherPost}>다른 게시글 가져오기</button>
    </>
  );
}
