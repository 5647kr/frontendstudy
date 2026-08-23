export default function PostSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border border-gray-200 p-8 space-y-4">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
