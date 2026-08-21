"use client";
import { AlertCircle } from "lucide-react";

export function PostCardError() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-7.5">
        <div className="flex flex-col items-center justify-center text-center space-y-3 py-6">
          <div className="w-12 h-12.5 bg-red-50 rounded-full flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-gray-900">
              오류가 발생했습니다
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
