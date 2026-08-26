import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <BookOpen size={32} className="text-gray-900" />
            </Link>
            <Link href="/post" className="px-5 py-2 rounded-lg">
              둘러보기
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
