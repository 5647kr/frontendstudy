"use client";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

interface ErrorPageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorPage({ message, onRetry }: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            오류가 발생했습니다
          </h2>
          <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              다시 시도
            </button>
          )}
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <Home className="w-4 h-4" />
            새로고침
          </button>
        </div>
      </div>
    </div>
  );
}
