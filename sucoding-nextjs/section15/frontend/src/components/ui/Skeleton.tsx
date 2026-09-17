export function PostCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="skeleton aspect-video w-full" />
      <div className="flex flex-col gap-3 p-4">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="flex items-center gap-3">
          <div className="skeleton h-7 w-7 rounded-full" />
          <div className="skeleton h-3 w-20 rounded" />
          <div className="skeleton h-3 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return <div className="skeleton aspect-[2.5/1] w-full rounded-lg" />;
}

export function PostDetailSkeleton() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="skeleton mb-4 h-6 w-24 rounded" />
      <div className="skeleton mb-4 h-[37.5px] w-2/3 rounded" />
      <div className="flex items-center gap-3 mb-6">
        <div className="skeleton h-10 w-9 rounded-full" />
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-28 rounded" />
          <div className="skeleton h-3 w-36 rounded" />
        </div>
      </div>
      <div className="skeleton mb-8 aspect-video w-full rounded-lg" />
      <div className="flex flex-col gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton h-4 w-full rounded" />
        ))}
        <div className="skeleton h-4 w-3/4 rounded" />
      </div>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 overflow-hidden rounded-lg border border-border bg-card p-4"
        >
          <div className="skeleton h-32 w-48 shrink-0 rounded-lg" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="skeleton h-5 w-full rounded" />
            <div className="skeleton h-4 w-3/4 rounded" />
            <div className="flex items-center gap-3 mt-auto">
              <div className="skeleton h-6 w-6 rounded-full" />
              <div className="skeleton h-3 w-20 rounded" />
              <div className="skeleton h-3 w-24 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PostGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function MyPageSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Profile Section Skeleton */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="skeleton h-5 w-14 rounded" />
          <div className="skeleton h-7 w-16 rounded-lg" />
        </div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="skeleton h-20 w-20 shrink-0 rounded-full" />
          {/* Info */}
          <div className="flex flex-1 flex-col gap-3 text-center sm:text-left">
            <div className="skeleton h-5 w-28 rounded" />
            <div className="skeleton h-4 w-44 rounded" />
            <div className="skeleton h-3 w-32 rounded" />
          </div>
        </div>
      </section>

      {/* My Posts Section Skeleton */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <div className="skeleton h-7 w-20 rounded" />
          <div className="skeleton h-4 w-8 rounded" />
        </div>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card sm:flex-row"
            >
              {/* Thumbnail */}
              <div className="skeleton aspect-video w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-36" />
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div className="flex flex-col gap-2">
                  <div className="skeleton h-5 w-20 rounded" />
                  <div className="skeleton h-5 w-full rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="skeleton h-3 w-28 rounded" />
                  <div className="flex items-center gap-1">
                    <div className="skeleton h-7 w-7 rounded-md" />
                    <div className="skeleton h-7 w-7 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function MypageProfileSkeleton() {
  return (
    <section className="mb-10 rounded-lg border border-border bg-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="skeleton h-5 w-14 rounded" />
        <div className="skeleton h-7 w-16 rounded-lg" />
      </div>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="skeleton h-20 w-20 shrink-0 rounded-full" />
        {/* Info */}
        <div className="flex flex-1 flex-col gap-3 text-center sm:text-left">
          <div className="skeleton h-5 w-28 rounded" />
          <div className="skeleton h-4 w-44 rounded" />
          <div className="skeleton h-3 w-32 rounded" />
        </div>
      </div>
    </section>
  );
}

export function MypagePostSkeleton() {
  return (
    <section>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card sm:flex-row"
          >
            {/* Thumbnail */}
            <div className="skeleton aspect-video w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-36" />
            {/* Content */}
            <div className="flex flex-1 flex-col justify-between gap-3 p-4">
              <div className="flex flex-col gap-2">
                <div className="skeleton h-5 w-20 rounded" />
                <div className="skeleton h-5 w-full rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="skeleton h-3 w-28 rounded" />
                <div className="flex items-center gap-1">
                  <div className="skeleton h-7 w-7 rounded-md" />
                  <div className="skeleton h-7 w-7 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProfileSkeleton() {
  return (
    <div className=" relative">
      <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-gray-400 animate-pulse bg-gray-500">
        <div className="h-full w-full rounded-full text-muted"></div>
      </button>
    </div>
  );
}
