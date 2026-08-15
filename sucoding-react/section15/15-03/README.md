# 15-03. fetch - 1 (basic)

<br />

## 📑 목차

1. [fetch](#1-fetch)
2. [참고 파일](#2-참고-파일)

<br />

## 1. fetch

```
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}

export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <ul>
        {posts.map((post: Posts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

```

## 2. 참고 파일

- components/Fetch.tsx
