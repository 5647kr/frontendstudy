"use client";

import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="items-center min-h-screen justify-center bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center max-w-md px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <AlertCircle size={48} className="text-red-600" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                에러가 발생하였습니다.
              </h1>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {error.message}
              </p>

              <div className="flex gap-3 justify-center">
                {reset && (
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <RefreshCcw size={20} />
                    <span>다시 시도</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
