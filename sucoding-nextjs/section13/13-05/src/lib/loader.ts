import { getMovieCreditData, getMovieDetailData } from "./api";

export async function loadMovieDetailView(id: string) {
  const [movie, credits] = await Promise.all([
    getMovieDetailData(id),
    getMovieCreditData(id),
  ]);

  const casting = credits.cast
    .filter((v) => v.known_for_department === "Acting" && v.order <= 4)
    .map((v) => v.name)
    .join(" · ");

  const director = credits.crew
    .filter((v) => v.job === "Director")
    .map((v) => v.name)[0];

  const production = movie.production_companies.map((v) => v.name).join(" · ");

  return {
    movie,
    casting,
    director,
    production,
  };
}
