# 15-01. useTransition

<br />

## 📑 목차

1. [개념](#1-json-server-활용)
2. [참고 파일](#2-참고-파일)

<br />

## 1. 개념

초기에는 상태 업데이트를 낮은 우선순위에 트랜지션으로 처리하는데 사용되었고

상태 업데이트를 낮은 우선 순위의 트랜지션(코드를 낮은 우선 순위(리액트가 더 중요한 작업이 끝나고 여유가 있을 때 처리함)로 처리한다)으로 처리 리액트 19부터는 비동기 함수도 처리할 수 있도록 기능이 확장

즉, 중요한 작업을 먼저 처리하고 여유가 있을 때 코드가 처리되게 할 수 있도록 처리함

```
const [isPending, startTransition] = useTransition();

isPending: 실행중인 트랜지션이 있으면 true, 없으면 false
startTransition: 코드를 트랜지션으로 실행(해당 함수로 작성한 코드는 React에서 낮은 우선순위로 처리한다)할 수 있게 해주는 함수
```

## 2. 예제

```
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

별도의 isLoading 상태를 만들 필요 없이 isPending을 이용한다.
isPending이 true라는 뜻은 무언가 데이터 패칭을 하고 있다는 의미이다.
```

## 2. 참고 파일

- App.tsx
