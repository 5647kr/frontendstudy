import Link from "next/link";
import Image from "next/image";
import { CalendarIcon } from "./ui/Icons";

export default function Hero() {
  return (
    <Link
      href={`/post/1`}
      className="group relative block overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[2.5/1] w-full">
        {/* placeholder.svg */}
        <Image
          src={"/images/blog-1.jpg"}
          alt={
            "The Impact of Technology on the Workplace: How Technology Is Changing"
          }
          fill
          preload
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="mb-3 inline-block rounded bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Technology
          </span>
          <h1 className="mb-3 text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl text-balance">
            The Impact of Technology on the Workplace: How Technology Is
            Changing
          </h1>
          <div className="flex items-center gap-3">
            {/* placeholder-user.svg */}
            <Image
              src={"/images/avatar.jpg"}
              alt={"Jason Francisco"}
              width={28}
              height={28}
              className="rounded-full w-7 h-7"
            />
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>2025-08-20</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
