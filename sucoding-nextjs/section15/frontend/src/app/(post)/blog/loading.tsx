import { SearchSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* 검색 입력 스켈레톤 */}
      <div className="skeleton mb-6 h-12 w-full rounded-lg" />

      {/* 카테고리 탭 스켈레톤 */}
      <div className="mb-9 flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-9 w-24 shrink-0 rounded-lg" />
        ))}
      </div>

      {/* result 카운트 + Latest / Popular 정렬 스켈레톤 */}
      <div className="mb-4 flex items-center justify-between">
        <div className="skeleton h-4 w-16 rounded" />
        <div className="flex items-center gap-4">
          <div className="skeleton h-4 w-12 rounded" />
          <div className="skeleton h-4 w-14 rounded" />
        </div>
      </div>

      {/* 검색 결과 리스트 스켈레톤 */}
      <SearchSkeleton />
    </div>
  );
}
