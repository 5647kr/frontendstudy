import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <>
      <div className="min-h-[calc(100vh-89px)] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2
            size={48}
            className="animate-spin text-gray-400 mx-auto mb-4"
          />
          <p className="text-gray-600">게시글을 불러오는 중...</p>
        </div>
      </div>
    </>
  );
}
