import { categories } from "@/lib/data";
import { ChevronDownIcon, ImagePlusIcon } from "../ui/Icons";

export default function PostWriteForm() {
  return (
    <>
      <form className="flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-sm font-medium text-foreground"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            className="h-11 w-full rounded-lg border-none bg-secondary px-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-foreground"
          >
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              className="h-11 w-full appearance-none rounded-lg border border-border bg-secondary px-4 pr-10 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Featured Image */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">
            Featured Image
          </label>
          <input type="file" accept="image/png,image/jpeg" className="hidden" />
          {/* 이미지 미리보기 */}
          {/* <div
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border-2 border-dashed border-border"
            role="button"
            tabIndex={0}
          >
            <Image
              src={"/images/blog-3.jpg"}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div> */}
          {/* 이미지 업로드  */}
          <div
            className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border transition-colors hover:border-muted-foreground"
            role="button"
            tabIndex={0}
          >
            <ImagePlusIcon className="h-12 w-12 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Click to upload image
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="content"
            className="text-sm font-medium text-foreground"
          >
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your post content here..."
            rows={12}
            className="w-full resize-y rounded-lg border-none bg-secondary p-4 text-sm leading-relaxed text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Publish Post
          </button>
          <button
            type="button"
            className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
