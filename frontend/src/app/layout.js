"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-lg font-semibold">
          AI Tutor
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/courses" className="text-white hover:underline">
            Courses
          </Link>
          <Link href="/timeline" className="text-white hover:underline">
            Timeline
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </nav>

        {/* Desktop Right-aligned Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-white hover:underline">
            Create Account
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-600 text-white py-4">
          <nav className="flex flex-col space-y-4 text-center">
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/timeline"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/login"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Create Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-5 text-center mt-10 border-t border-gray-700">
      <p className="text-gray-300 text-xs sm:text-sm md:text-base">
        © 2025 AI Powered Language Tutor | Created by Bryan Melo
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-2">
        <a
          href="https://github.com/bryan-melo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          GitHub
        </a>
        <span className="hidden sm:inline text-gray-500">|</span>
        <a
          href="https://linkedin.com/in/bryan-melo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
