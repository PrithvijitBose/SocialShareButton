"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/SocialShare_logo.webp" alt="SocialShareButton Logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <span className="font-semibold text-lg sm:text-xl tracking-tight">
              Social<br /><span className="text-primary leading-tight block -mt-1">ShareButton</span>
            </span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>

            <Link
              href="/docs"
              className="bg-primary text-primary-foreground px-3 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
