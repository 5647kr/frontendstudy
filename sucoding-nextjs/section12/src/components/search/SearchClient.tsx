"use client";

import { useMemo, useRef, useState } from "react";
import MovieCard from "../movies/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "next/navigation";
import {
  fetchMoviesFromRoute,
  getMovieMoreData,
  getMoviesData,
} from "@/lib/api";
import { MovieCardSkeleton } from "../ui/Skeletons";

export default function SearchClient({ movies }: { movies: Movie[] }) {
  const page = useRef(1);
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword")?.trim() ?? "";
  const category = searchParams.get("category")?.trim() ?? "";

  const mode = useMemo(() => {
    if (keyword) return { type: "keyword", value: keyword };
    if (category) return { type: "category", value: category };

    return { type: "none", value: "" };
  }, [keyword, category]);

  const [searchMovies, setSearchMovies] = useState(movies);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleMore = async () => {
    if (mode.type === "none") return;

    page.current += 1;
    setIsLoading(true);

    try {
      const res =
        mode.type === "keyword"
          ? await fetchMoviesFromRoute(page.current, "", mode.value)
          : await fetchMoviesFromRoute(page.current, mode.value, "");

      setSearchMovies((searchMovies) => [...searchMovies, ...res.results]);

      if (res.results.length === 0) setHasMore(false);
    } catch (error) {
      console.error(error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <InfiniteScroll
        dataLength={searchMovies.length}
        next={handleMore}
        hasMore={hasMore}
        loader={null}>
        {searchMovies && searchMovies.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {searchMovies?.map((movie, i) => (
              <MovieCard key={`${movie.id}${i}`} movie={movie} />
            ))}
            {isLoading &&
              Array.from({ length: 10 }).map((_, v) => (
                <MovieCardSkeleton key={v} />
              ))}
          </div>
        )}
        {/* 검색된 영화가 없으면 */}
        {!searchMovies ||
          (searchMovies.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground mb-4">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                검색 결과가 없습니다
              </h2>
              <p className="text-muted-foreground text-center">
                다른 검색어로 다시 시도해보세요.
              </p>
            </div>
          ))}
      </InfiniteScroll>
    </>
  );
}
