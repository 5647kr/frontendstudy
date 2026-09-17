"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, EditIcon, TrashIcon } from "../ui/Icons";
import DeleteModal from "../common/DeleteModal";

export default function MyPageContent() {
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  function handleDeleteConfirm() {
    if (deleteTarget !== null) {
      setDeleteTarget(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Profile Section */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">Profile</h2>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border">
              <Image
                src={"/images/avatar.jpg"}
                alt="Profile avatar"
                fill
                sizes="80px"
                className="object-cover w-20 h-20 rounded-full"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Jone Doe
              </h3>
              <p className="text-sm text-muted-foreground">jone@gmail.com</p>
            </div>
            <p className="text-xs text-muted-foreground">ID: abcdef</p>
          </div>
        </div>
      </section>

      {/* My Posts Section */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            My Posts{" "}
            <span className="text-sm font-normal text-muted-foreground">
              (0)
            </span>
          </h2>
        </div>

        {/* <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-16">
          <p className="text-sm text-muted-foreground">
            No posts yet. Start writing your first post!
          </p>
          <Link
            href="/write"
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
          >
            Write a Post
          </Link>
        </div> */}
        <div className="flex flex-col gap-3">
          <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30 sm:flex-row">
            {/* Thumbnail */}
            <Link
              href={`/post/1`}
              className="relative aspect-video w-full shrink-0 sm:aspect-auto sm:h-auto sm:w-36 p-4"
            >
              <Image
                src={"/images/blog-1.jpg"}
                alt="Post thumbnail"
                fill
                sizes="(max-width: 640px) 100vw, 144px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between gap-3 p-4">
              <div>
                <span className="mb-1 inline-block rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Techonolgy
                </span>
                <Link href={`/post/1`}>
                  <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors hover:text-primary sm:line-clamp-1">
                    My First Post
                  </h3>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarIcon className="h-3 w-3" />
                  ID: abc123def456
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/write?edit=1`}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Edit post"
                  >
                    <EditIcon className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => setDeleteTarget(1)}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Delete post"
                  >
                    <TrashIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {/* {deleteTarget !== null && (
        <DeleteModal
          handleDeleteConfirm={handleDeleteConfirm}
          setDeleteTarget={setDeleteTarget}
        />
      )} */}
    </div>
  );
}
