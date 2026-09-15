import MovieModalContent from "@/components/movies/MovieModalContent";
import Modal from "@/components/ui/Modal";
import { getMovieDetailData } from "@/lib/api";

export default async function PosterModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [movie] = await Promise.all([getMovieDetailData(id)]);
  return (
    <Modal>
      <MovieModalContent id={id} />
      <title>{`Wave - ${movie.title}`}</title>
    </Modal>
  );
}
