import ScrollTop from "@/components/ui/ScrollTop";
import { MovieDetailSkeleton } from "@/components/ui/Skeletons";

export default function Loading() {
  return (
    <>
      <ScrollTop />
      <MovieDetailSkeleton />;
    </>
  );
}
