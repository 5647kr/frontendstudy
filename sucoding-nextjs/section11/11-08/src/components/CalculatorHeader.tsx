"use client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function CalculatorHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          계산기
        </h1>
        <button
          className=" p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          {mounted && resolvedTheme === "dark" ? (
            <Moon className="h-5 w-5 text-gray-900 dark:text-white" />
          ) : (
            <Sun className="h-5 w-5 text-gray-900 dark:text-white" />
          )}
        </button>
      </div>
    </>
  );
}
