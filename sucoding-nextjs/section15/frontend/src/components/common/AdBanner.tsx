import Link from "next/link";

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <Link
      href={"https://inf.run/n15s3"}
      className={`w-full h-25 relative overflow-hidden ${className}`}
      target="_blank"
    >
      {/* Background - Light/Dark mode */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1a1a2e]" />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-200/30 via-cyan-200/30 to-purple-200/30 dark:from-purple-900/20 dark:via-cyan-900/20 dark:to-purple-900/20 animate-pulse" />

      {/* Glowing lines effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent dark:via-cyan-400/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-400/70 to-transparent dark:via-purple-400/50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-8">
        {/* Left section - Main text */}
        <div className="flex flex-col gap-1">
          <div className="text-gray-900 dark:text-white text-xl font-semibold tracking-tight">
            타입스크립트로 배우는 Next.JS
          </div>
          <div className="text-cyan-600 dark:text-cyan-300 text-sm">
            Next.JS를 배우는 가장 완벽한 방법, 지금 인프런에서 시작하세요!
          </div>
        </div>

        {/* Right section - Tech pattern */}
        <div className="flex items-center gap-2">
          {/* Code-like decorative elements */}
          <div className="flex flex-col gap-1 text-xs font-mono opacity-70 dark:opacity-60">
            <div className="text-purple-500 dark:text-purple-400">
              {"<"}
              <span className="text-cyan-600 dark:text-cyan-400">
                typescript
              </span>
              {">"}
            </div>
            <div className="text-purple-500 dark:text-purple-400 ml-3">
              {"<"}
              <span className="text-cyan-600 dark:text-cyan-400">/react</span>
              {">"}
            </div>
          </div>

          {/* Neon glow decoration */}
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-md animate-pulse" />
            <div className="absolute inset-2 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-cyan-500/60 dark:border-cyan-400/50 rounded-full" />
              <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 dark:border-purple-500/30" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/40 dark:border-cyan-500/30" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/40 dark:border-cyan-500/30" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 dark:border-purple-500/30" />
    </Link>
  );
}
