import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  isLike: boolean;
}

export default function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // 즉각적인 반응이 되지 않는다.
  const updateLike = async (id: number, isLike: boolean) => {
    const { data } = await axios.patch(`http://localhost:3000/posts/${id}`, {
      isLike: !isLike,
    });
    setPosts((posts) =>
      posts.map((post) => (post.id === data.id ? data : post)),
    );
    console.log(data);
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
      {posts.map((post) => (
        <Heart
          key={post.id}
          fill={post.isLike ? "rgb(255, 0, 0" : "none"}
          stroke={post.isLike ? "rgb(255, 0, 0" : "currentColor"}
          onClick={() => updateLike(post.id, post.isLike)}
        />
      ))}

      {/* <Heart fill="none" stroke="currentColor" />
      <Heart fill="rgb(255, 0, 0)" stroke="rgb(255,0,0)" /> */}
    </>
  );
}
