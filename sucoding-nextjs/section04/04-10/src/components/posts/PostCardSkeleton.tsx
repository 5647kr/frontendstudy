export function PostCardSkeleton() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-6.25 bg-gray-200 rounded-lg animate-pulse w-3/4"></div>
        </div>

        <div className="space-y-2">
          <div className="h-4.5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4.5 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>

        <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
