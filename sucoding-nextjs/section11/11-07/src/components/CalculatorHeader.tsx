"use client";
import { Sun } from "lucide-react";

export default function CalculatorHeader() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          계산기
        </h1>
        <button className=" p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <Sun className="h-5 w-5 text-gray-900 dark:text-white" />
          {/* <Moon className="h-5 w-5 text-gray-900 dark:text-white" /> */}
        </button>
      </div>
    </>
  );
}
