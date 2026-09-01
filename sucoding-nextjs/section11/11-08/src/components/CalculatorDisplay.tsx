"use client";

export default function CalculatorDisplay() {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 min-h-35 flex flex-col justify-end">
      <div className="text-gray-500 dark:text-gray-400 text-sm text-right mb-2 min-h-5 overflow-x-auto">
        0
      </div>
      <div className="text-gray-900 dark:text-white text-5xl font-bold text-right overflow-x-auto">
        0
      </div>
    </div>
  );
}
