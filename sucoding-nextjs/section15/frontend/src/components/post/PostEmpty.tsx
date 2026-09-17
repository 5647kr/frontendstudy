import Link from "next/link";
import { EditIcon } from "../ui/Icons";

export function PostEmpty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card py-16">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
        <EditIcon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="mb-1 text-base font-semibold text-foreground">
        아직 게시글이 없습니다
      </h3>
      <p className="mb-5 text-sm text-muted-foreground">
        첫 번째 글을 작성해 보세요!
      </p>
      <Link
        href="/write"
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
      >
        글 작성하기
      </Link>
    </div>
  );
}
