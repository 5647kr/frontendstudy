import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutesToHour(totalMinites: number) {
  const hours = Math.floor(totalMinites / 60);
  const minutes = totalMinites & 60;

  return `${hours}h ${minutes}m`;
}

export function pickMainVideo(videos: TMDBVideo[]) {
  return (
    videos.find((v) => v.type === "Trailer" && v.official) ??
    videos.find((v) => v.type === "Trailer") ??
    videos.find((v) => v.official) ??
    videos[0] ??
    null
  );
}
