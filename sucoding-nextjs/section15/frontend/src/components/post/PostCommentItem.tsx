import Image from "next/image";
import { CopyIcon } from "../ui/Icons";

export default function PostCommentItem() {
  return (
    <div className="flex gap-3 rounded-lg bg-secondary/50 p-4">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
        {/* placeholder-user.svg */}
        <Image
          src={"/images/avatar.jpg"}
          alt={"Jason Francisco"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Jason Francisco
          </span>
          <span className="text-xs text-muted-foreground">2026-08-20</span>
        </div>
        <p className="mb-2 text-sm leading-relaxed text-foreground/85">
          This is a great article! The insights about remote work are
          particularly relevant.
        </p>
        <button className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-destructive">
          <CopyIcon className="h-3 w-3" />
          삭제
        </button>
      </div>
    </div>
  );
}
