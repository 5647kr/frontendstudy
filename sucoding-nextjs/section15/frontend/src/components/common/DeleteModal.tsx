import { Dispatch, SetStateAction } from "react";
import { CloseIcon } from "../ui/Icons";

export default function DeleteModal({
  handleDeleteConfirm,
  setDeleteTarget,
}: {
  handleDeleteConfirm: () => void;
  setDeleteTarget: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
        <div className="mx-4 w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-xl">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">
              Delete Post
            </h3>
            <button
              onClick={() => setDeleteTarget(null)}
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setDeleteTarget(null)}
              className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteConfirm}
              className="rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-opacity hover:opacity-80"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
