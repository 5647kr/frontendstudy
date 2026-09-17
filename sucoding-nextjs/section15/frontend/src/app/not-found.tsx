import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 min-h-[calc(100vh-60px-64px)] -translate-y-1">
      <div className="flex flex-col items-center gap-2 pb-4">
        <span className="text-6xl font-bold text-primary">404</span>
        <h1 className="text-xl font-semibold text-foreground">
          {"페이지를 찾을 수 없습니다"}
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          {"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."}
        </p>
      </div>
      <Link
        href="/"
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
      >
        {"홈으로 돌아가기"}
      </Link>
    </div>
  );
}
