import CalculatorHeader from "./CalculatorHeader";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

export function Calculator() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 space-y-4">
          <CalculatorHeader />
          <CalculatorDisplay />
          <CalculatorButtons />
        </div>
      </div>
    </div>
  );
}
