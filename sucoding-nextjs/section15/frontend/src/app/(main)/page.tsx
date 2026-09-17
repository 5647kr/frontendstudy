import Hero from "@/components/Hero";
import AdBanner from "@/components/common/AdBanner";
import PostSection from "@/components/post/PostSection";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <Hero />
      <AdBanner />
      <PostSection />
      <AdBanner />
      <PostSection />
    </div>
  );
}
