"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

// 사용자 os 환경을 검색해서 기본 테마를 반환하는 함수
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: string) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  const resolved = theme === "system" ? getSystemTheme() : theme;

  root.classList.add(resolved);
}

export default function Card() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) ?? getSystemTheme();

    window.setTimeout(() => setTheme(saved), 0);

    applyTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    applyTheme(theme);
  }, [theme]);
  return (
    <article className="flex items-center justify-center min-h-screen">
      <div className="w-100 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          {/* 아이콘 클릭 시 라이트모드 <-> 다크모드 전환 */}
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              onClick={() =>
                setTheme((theme) =>
                  theme === "system" || theme === "dark" ? "light" : "dark",
                )
              }
              className="h-6 w-6 stroke-white text-white cursor-pointer">
              {theme === "dark" ? <Moon /> : <Sun />}
            </svg>
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
          Writes upside-down
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </article>
  );
}
