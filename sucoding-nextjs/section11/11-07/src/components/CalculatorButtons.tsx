"use client";

export default function CalculatorButtons() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <button className="h-16 text-xl font-semibold rounded-2xl bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white transition-colors col-span-3">
        AC
      </button>

      <button className="h-16 text-xl font-semibold rounded-2xl bg-linear-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white transition-colors">
        ÷
      </button>

      {["7", "8", "9"].map((num) => (
        <button
          key={num}
          className="h-16 text-xl font-semibold rounded-2xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
        >
          {num}
        </button>
      ))}
      <button className="h-16 text-xl font-semibold rounded-2xl bg-linear-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white transition-colors">
        ×
      </button>

      {["4", "5", "6"].map((num) => (
        <button
          key={num}
          className="h-16 text-xl font-semibold rounded-2xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
        >
          {num}
        </button>
      ))}
      <button className="h-16 text-xl font-semibold rounded-2xl bg-linear-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white transition-colors">
        -
      </button>

      {["1", "2", "3"].map((num) => (
        <button
          key={num}
          className="h-16 text-xl font-semibold rounded-2xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors"
        >
          {num}
        </button>
      ))}
      <button className="h-16 text-xl font-semibold rounded-2xl bg-linear-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white transition-colors">
        +
      </button>

      <button className="h-16 text-xl font-semibold rounded-2xl col-span-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors">
        0
      </button>
      <button className="h-16 text-xl font-semibold rounded-2xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition-colors">
        .
      </button>
      <button className="h-16 text-xl font-semibold rounded-2xl bg-linear-to-br from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white transition-colors">
        =
      </button>
    </div>
  );
}
