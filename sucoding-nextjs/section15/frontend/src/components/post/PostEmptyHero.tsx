import Link from "next/link";
import { EditIcon } from "../ui/Icons";

export default function PostEmptyHero() {
  return (
    <div className="relative flex aspect-[2.5/1] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-card">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        <EditIcon className="h-7 w-7 text-muted-foreground" />
      </div>
      <h2 className="mb-1 text-lg font-bold text-foreground">
        아직 게시글이 없습니다
      </h2>
      <p className="mb-5 text-sm text-muted-foreground">
        첫 번째 글을 작성하고 히어로 영역을 채워보세요!
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
