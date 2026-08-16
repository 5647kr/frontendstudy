# 16-07. useOptimistic - 2

<br />

## 📑 목차

1. [개념](#1-개념)
2. [예제](#2-예제)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 개념

낙관적 업데이트란 서버의 응답을 기다리지 않고 먼저 사용자 인터페이스를 업데이트 하는 기법을 말한다.

```
const [optimisticState, addOptimistic] = useOptimistic(state, (currentState, optimisticValue) => {})


optimisticState: 현재 낙관적 상태값 -> 낙관적 업데이트가 발생하지 않았을 땐 초기값의 상태과 똑같고
낙관적 업데이특 진행 중이면 업데이트 함수의 반환값이 사용됨
addOptimistic: 낙관적 업데이트를 실행할 떄 호출하는 함수로 인자로 넘긴 값이 업데이트 함수의 매개변수로 전달되게 됨, 서버 응답 실패시 원래 상태로 볼구하는 롤백 기능도 내장되어있음
state: 서버 응답을 기다리기 전에 기본적으로 보여지게 될 상태값
(currentState, optimisticValue) = {}: 낙관적 업데이트 시 상태를 어떻게 바꿀지를 정의하는 함수
```

## 2. 예제

아래 코드는 낙관적 업데이트가 적용된 코드이다.

```
import axios from "axios";
import { Heart } from "lucide-react";
import {
  startTransition,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";

interface Posts {
  id: number;
  isLike: boolean;
}

export default function App() {
  const controller = useRef<AbortController | null>(null);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    posts,
    (statePosts, id) => {
      return statePosts.map((statePost) =>
        statePost.id === id
          ? { ...statePost, isLike: !statePost.isLike }
          : statePost,
      );
    },
  );
  // 즉각적인 반응이 되지 않는다.
  const updateLike = (id: number, isLike: boolean) => {
    controller.current?.abort();
    controller.current = new AbortController();

    startTransition(async () => {
      addOptimisticPosts(id);
      try {
        const { data } = await axios.patch(
          `http://localhost:3000/posts/${id}`,
          {
            isLike: !isLike,
          },
          { signal: controller.current?.signal },
        );
        setPosts((posts) =>
          posts.map((post) => (post.id === data.id ? data : post)),
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    });
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");
        setPosts(data);
      } catch (error) {
        console.error("에러 발생" + error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  if (isLoading) return <p>로딩 중....</p>;
  return (
    <>
      {/* fill: 'none', stroke: 'currentColor' */}
      {/* fill: 'rgb(255,0,0)', stroke: 'rgb(255,0,0)' */}
      {optimisticPosts.map((post) => (
        <Heart
          key={post.id}
          fill={post.isLike ? "rgb(255, 0, 0)" : "none"}
          stroke={post.isLike ? "rgb(255, 0, 0)" : "currentColor"}
          onClick={() => updateLike(post.id, post.isLike)}
        />
      ))}

      {/* <Heart fill="none" stroke="currentColor" />
      <Heart fill="rgb(255, 0, 0)" stroke="rgb(255,0,0)" /> */}
    </>
  );
}
```

## 3. 참고 파일

- App.tsx
