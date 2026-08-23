"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const randomLikes = Math.floor(Math.random() * 51);

    window.setTimeout(() => setLikes(randomLikes), 0);
  }, []);

  const handleLike = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const previousLikes = likes;
    const previousIsLiked = isLiked;

    const newLikes = isLiked ? likes - 1 : likes + 1;

    setLikes(newLikes);
    setIsLiked((isLiked) => !isLiked);

    try {
      await new Promise((r) => setTimeout(r, 300));
    } catch {
      setLikes(previousLikes);
      setIsLiked(previousIsLiked);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
      {/* 하트 체크됨: fill-gray-900 text-gray-900 */}
      {/* 하트 체크안됨:  text-gray-600*/}
      <Heart
        className={`w-5 h-5 transition-all ${isLiked ? "fill-gray-900 text-gray-900" : "text-gray-600"} }`}
      />
      <span className="font-medium text-gray-900">{likes}</span>
    </button>
  );
}
