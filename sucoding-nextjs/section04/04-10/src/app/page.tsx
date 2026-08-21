import { Banner } from "@/components/main/Banner";
import { PostCard } from "@/components/posts/PostCard";

export default async function Page() {
  return (
    <>
      <Banner />
      <main className="flex-1 w-full py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <PostCard />
          </div>
        </div>
      </main>
    </>
  );
}
