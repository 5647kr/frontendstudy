export default function CommentSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
