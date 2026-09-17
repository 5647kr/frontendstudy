import { HeroSkeleton, PostGridSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <HeroSkeleton />
      <div className="skeleton h-25 w-full rounded-lg" />
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="skeleton h-6 w-28 rounded" />
          <div className="skeleton h-4 w-20 rounded" />
        </div>
        <PostGridSkeleton />
      </div>
    </div>
  );
}
