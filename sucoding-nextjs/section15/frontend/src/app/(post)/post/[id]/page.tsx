import AdBanner from "@/components/common/AdBanner";
import PostHeader from "@/components/post/PostHeader";
import PostImage from "@/components/post/PostImage";
import PostContent from "@/components/post/PostContent";
import PostSection from "@/components/post/PostSection";
import PostComment from "@/components/post/PostComment";

export default function PostDetailPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Post Header */}
      <PostHeader />

      {/* Featured Image */}
      <PostImage />

      {/* Content */}
      <PostContent />

      {/* Comments Section */}
      <PostComment />

      {/* Ad & Related Posts */}
      <div className="mt-12 flex flex-col gap-8">
        <AdBanner />
        <PostSection />
      </div>
    </div>
  );
}
