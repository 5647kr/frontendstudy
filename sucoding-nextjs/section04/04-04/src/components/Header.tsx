import Link from "next/link";
import { Home, LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Home className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">My App</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
