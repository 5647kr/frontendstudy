import { Sparkles } from "lucide-react";

export function Banner() {
  return (
    <div className="w-full bg-linear-to-r from-blue-600 to-blue-700 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm mb-2">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          소셜 포스트 컬렉션
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          다양한 주제의 게시글을 탐색하고 영감을 받아보세요
        </p>
      </div>
    </div>
  );
}
