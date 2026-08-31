import localFont from "next/font/local";

export const doldam = localFont({
  // src 속성만 명확히 지정해주면 된다. 순서에 따라 적용순서를 정할 수 있다.woff2를 먼저 적용하는게 좋다.
  src: [
    {
      path: "../assets/fonts/jejudoldam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/jejudoldam.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
