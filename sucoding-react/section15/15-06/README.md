# 15-06. fetch - 3 (signal)

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

```

AbortController의 인스턴스를 생성하고 fetch의 2번째 인자로 signal: controller.signal을 전달해 데이터 통신을 취소할 수 있다.

## 2. 참고 파일

- components/Fetch.tsx
