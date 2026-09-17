import Image from "next/image";
import { SendIcon } from "../ui/Icons";
import PostCommentItem from "./PostCommentItem";

export default function PostComment() {
  return (
    <>
      <section className="border-t border-border pt-8">
        <h2 className="mb-6 text-lg font-bold text-foreground">Comments</h2>

        <form className="mb-6">
          <div className="flex gap-3">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/avatar.jpg"
                alt="Your avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Write a comment..."
                rows={3}
                className="w-full resize-none rounded-lg border-none bg-secondary p-3 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <SendIcon className="h-3.5 w-3.5" />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <PostCommentItem />
        </div>
      </section>
    </>
  );
}
