"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function ViewCounter() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const randomViews = Math.floor(Math.random() * 1001);

    window.setTimeout(() => setViews(randomViews), 0);
  }, []);
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <Eye className="w-5 h-5" />
      <span className="font-medium">{views}</span>
    </div>
  );
}
