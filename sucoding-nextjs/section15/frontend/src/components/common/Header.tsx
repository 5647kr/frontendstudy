"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  EditIcon,
  LoginIcon,
  LogoutIcon,
  SunIcon,
  UserIcon,
} from "../ui/Icons";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const theme = "dark";
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            S
          </div>
          <span className="text-lg font-bold text-foreground">SULOG</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {/* <MoonIcon className="h-5 w-5" /> */}
            <SunIcon className="h-5 w-5" />
          </button>

          <Link
            href="/write"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80"
            aria-label="Write new post"
          >
            <EditIcon className="h-4 w-4" />
          </Link>

          <Link
            href="/login"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Sign in"
          >
            <LoginIcon className="h-5 w-5" />
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-border transition-colors hover:border-primary"
            >
              <Image
                src="/images/avatar.jpg"
                alt="User avatar"
                className="h-full w-full object-cover"
                width={36}
                height={36}
              />
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                <div className="border-b border-border px-4 py-3">
                  <p className="text-sm font-medium text-foreground">
                    testname
                  </p>
                  <p className="text-xs text-muted-foreground">
                    test@example.com
                  </p>
                </div>
                <Link
                  href="/mypage"
                  onClick={() => setShowDropdown(false)}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <UserIcon className="h-4 w-4" />
                  My Page
                </Link>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    router.push("/login");
                  }}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <LogoutIcon className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
