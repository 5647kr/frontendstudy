import { AlertCircle, Home, RefreshCcw } from "lucide-react";

interface ErrorPageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onHome?: () => void;
}

export function ErrorPage({
  title = "오류가 발생했습니다",
  message = "요청을 처리하는 중에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
  onRetry,
  onHome,
}: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
          <AlertCircle size={48} className="text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

        <div className="flex gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <RefreshCcw size={20} />
              <span>다시 시도</span>
            </button>
          )}

          {onHome && (
            <button
              onClick={onHome}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Home size={20} />
              <span>홈으로</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
