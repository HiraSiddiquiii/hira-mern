"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
          onClick={() => setMenuOpen(false)}
        >
          HisabDo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/transactions"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Transactions
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 transition hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="text-gray-700 transition hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              href="/transactions"
              className="text-gray-700 transition hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Transactions
            </Link>

            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
