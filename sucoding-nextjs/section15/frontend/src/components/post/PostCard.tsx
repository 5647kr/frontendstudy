import Link from "next/link";
import Image from "next/image";
import { CalendarIcon } from "../ui/Icons";
export default function PostCard() {
  return (
    <Link
      href={`/post/1`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* placeholder.svg */}
        <Image
          src={"/images/blog-1.jpg"}
          alt=" Hown AI Is Revolutionizing Content Creation in 2026"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
          Technology
        </span>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
          Hown AI Is Revolutionizing Content Creation in 2026
        </h3>
        <div className="flex items-center gap-2">
          {/* placeholder-user.svg */}
          <Image
            src={"/images/avatar.jpg"}
            alt={"Jason Francisco"}
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
          />
          <span className="text-xs text-muted-foreground">Jason Francisco</span>
          <CalendarIcon className="ml-1 h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">2026-08-20</span>
        </div>
      </div>
    </Link>
  );
}
