"use client";

import { categories } from "@/lib/data";
import { CalendarIcon, SearchIcon } from "../ui/Icons";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function SearchContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts..."
          className="h-12 w-full rounded-lg border border-border bg-card pl-12 pr-4 text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {/* 카테고리 선택: bg-primary text-primary-foreground */}
        {/* 카테고리 미선택:  bg-secondary text-secondary-foreground hover:bg-secondary/80*/}
        {["All", ...categories].map((cat, i) => (
          <button
            key={cat}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count + Sort */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">result</p>
        <div className="flex items-center gap-4">
          {/* 선택됨: text-foreground underline underline-offset-4 */}
          {/* 선택안됨: text-muted-foreground hover:text-foreground*/}
          <button
            className={`text-sm font-medium transition-colors text-foreground underline underline-offset-4`}
          >
            Latest
          </button>
          <button
            className={`text-sm font-medium transition-colors text-muted-foreground hover:text-foreground`}
          >
            Popular
          </button>
        </div>
      </div>

      {/* 로딩 */}
      {/* <SearchSkeleton /> */}
      {/* 게시글 없으면 */}
      {/* <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg font-medium text-muted-foreground">
          No posts found
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try a different search term or category
        </p>
      </div> */}
      {/* 게시글 있으면 */}
      <div className="flex flex-col gap-4">
        <Link
          href={`/post/1`}
          className="group flex flex-col gap-4 overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/30 sm:flex-row"
        >
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:aspect-auto sm:h-32 sm:w-48">
            {/* placeholder.svg */}
            <Image
              src={"/images/blog-1.jpg"}
              alt="Hown AI Is Revolutionizing Content Creation in 2026"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute left-2 top-2 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              Technology
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary">
                Hown AI Is Revolutionizing Content Creation in 2026
              </h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Discover how artificial intelligence is transforming the way we
                create and consume content in 2026.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Image
                src={"/images/avatar.jpg"}
                alt="John Doe"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-xs text-muted-foreground">John Doe</span>
              <CalendarIcon className="ml-1 h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">2026-08-20</span>
            </div>
          </div>
        </Link>
      </div>
      <Pagination
        pageRange={5}
        currentPage={1}
        maxPage={10}
        onPageChange={() => {}}
      />
    </div>
  );
}
