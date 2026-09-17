import PostWriteForm from "@/components/post/PostWriteForm";

export default function WritePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold text-foreground">
        Write New Post
      </h1>

      <PostWriteForm />
    </div>
  );
}
