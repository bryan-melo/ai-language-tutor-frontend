// components/Header.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsAuthenticated(!!user);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <header className="bg-slate-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold">
          AI Language Tutor
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/courses" className="text-white hover:underline">
            Courses
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </nav>

        <nav className="hidden md:flex space-x-6">
          {isAuthenticated ? (
            <button onClick={logout} className="text-white hover:underline">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="text-white hover:underline">
                Login
              </Link>
              <Link href="/signup" className="text-white hover:underline">
                Create Account
              </Link>
            </>
          )}
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

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
              href="/about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="hover:underline"
              >
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
