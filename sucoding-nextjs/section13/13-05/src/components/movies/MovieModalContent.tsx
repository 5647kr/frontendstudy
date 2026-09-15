import { loadMovieDetailView } from "@/lib/loader";
import { formatMinutesToHourMin } from "@/lib/utils";
import MovieDetailPoster from "./MovieDetailPoster";
import HoverPrefetchLink from "../ui/HoverPrefetchLink";

export default async function MovieModalContent({ id }: { id: string }) {
  const { movie, casting, director, production } =
    await loadMovieDetailView(id);
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row">
        {/* 포스터 이미지 */}
        <div className="relative w-full md:w-1/2 aspect-2/3">
          <MovieDetailPoster
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>

        {/* 영화 정보 */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {movie.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {movie.original_title}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {(movie.vote_average * 10).toFixed(0)}%
              </span>
              <span className="text-muted-foreground text-sm">
                {movie.genres.map((genre) => genre.name).join(", ")} ·{" "}
                {formatMinutesToHourMin(movie.runtime || 0)}
              </span>
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
              {movie.overview}
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">개봉일:</span>
                <span className="text-foreground">{movie.release_date}</span>
              </p>
              <p>
                <span className="text-muted-foreground">감독:</span>
                <span className="text-foreground">{director}</span>
              </p>
              <p>
                <span className="text-muted-foreground">출연:</span>
                <span className="text-foreground">{casting}</span>
              </p>
              <p>
                <span className="text-muted-foreground">제작사:</span>
                <span className="text-foreground">{production}</span>
              </p>
            </div>
          </div>

          <HoverPrefetchLink
            href={`/movie/${movie.id}`}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            상세정보 보기
          </HoverPrefetchLink>
        </div>
      </div>
    </div>
  );
}
