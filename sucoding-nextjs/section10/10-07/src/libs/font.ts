import { Rubik_Storm, Nanum_Brush_Script } from "next/font/google";
import localFont from "next/font/local";
export const doldam = localFont({
  src: [
    {
      path: "../assets/fonts/jejudoldam.woff2",
      weight: "400",
      style: "normal", // italic
    },
    {
      path: "../assets/fonts/jejudoldam.woff",
      weight: "400",
      style: "normal", // italic
    },
  ],
});
export const rubikStorm = Rubik_Storm({
  subsets: ["latin"],
  weight: "400",
});
export const nanumBrush = Nanum_Brush_Script({
  subsets: ["latin"],
  weight: "400",
});
