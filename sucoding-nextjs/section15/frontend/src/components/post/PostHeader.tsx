"use client";
import Image from "next/image";
import { CalendarIcon, EditIcon, TrashIcon, ViewIcon } from "../ui/Icons";
import { useState } from "react";
import DeleteModal from "../common/DeleteModal";

export default function PostHeader() {
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);
  function handleDeleteConfirm() {
    if (deleteTarget !== null) {
      setDeleteTarget(null);
    }
  }
  return (
    <>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Technology
          </span>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">
              <EditIcon className="h-3.5 w-3.5" />
              Edit
            </button>
            <button
              className="flex items-center gap-1.5 rounded-lg bg-destructive px-3 py-1.5 text-xs font-medium text-destructive-foreground transition-opacity hover:opacity-90"
              onClick={() => setDeleteTarget(1)}
            >
              <TrashIcon className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        </div>

        <h1 className="mb-4 text-2xl font-bold leading-tight text-foreground text-balance md:text-3xl">
          The Impact of Technology on the Workplace: How Technology Is Changing
        </h1>

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
            {/* /placeholder-user.svg */}
            <Image
              src={"/images/avatar.jpg"}
              alt={"Jason Francisco"}
              width={32}
              height={32}
              className="object-cover w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Jason Francisco</span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              2026-08-20
            </span>
            <span className="flex items-center gap-1">
              <ViewIcon className="h-3.5 w-3.5" />
              100
            </span>
          </div>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      {deleteTarget !== null && (
        <DeleteModal
          handleDeleteConfirm={handleDeleteConfirm}
          setDeleteTarget={setDeleteTarget}
        />
      )}
    </>
  );
}
