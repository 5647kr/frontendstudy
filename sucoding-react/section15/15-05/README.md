# 15-03. fetch - 3 (error)

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3000/posts2")
      .then((response) => {
        if (!response.ok) throw new Error("네트워크 통신 오류");
        console.log(response);
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((e) => {
        console.log(e);
        setError(e instanceof Error ? e.message : "unknown error");
      })
      .finally(() => {
        setIsLoading(true);
      });
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

fetch 에러는 크게 두 종류이다.

1. 404 에러: api 자원이 없는 경우 즉 도메인은 존재하지만 도메인에 해당하는 api 자원이 없는 경우
2. network 에러: 도메인 자체가 존재하지 않는 경우

404 에러의 경우엔 response에서 잡아야 한다.
network 에러의 경우엔 catch문에 에러가 잡히게 된다.

## 2. 참고 파일

- components/Fetch.tsx
