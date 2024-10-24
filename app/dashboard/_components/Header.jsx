"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) =>
    pathname === path ? "text-blue-600" : "text-gray-600";

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className=" w-full mx-auto bg-blue-100 shadow-md px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={100}
              className="rounded-full"
            /> */}
            <span className="text-xl font-bold text-gray-800">
              AI Mock Interview
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {["Dashboard", "Questions", "Upgrade", "How it works"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`transition-colors duration-200 ${isActive(
                      `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    )}`}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
            menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center py-8">
            {["Dashboard", "Questions", "Upgrade", "How it works"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`py-2 px-4 w-full text-center transition-colors duration-200 ${isActive(
                    `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  )}`}
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
