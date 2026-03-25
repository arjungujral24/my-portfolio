"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-light text-bg-dark">
      {/* Main bar */}
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-[64px] h-[48px]">

        {/* Logo */}
        <Link href="/" className="text-[20px] font-bold transition-opacity duration-200 hover:opacity-70">
          Arjun Gujral
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-[40px]">
          <Link href="/" className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200">
            About
          </Link>
          <Link href="/#projects" className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200">
            Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/arjungujral/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-[24px] leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden max-w-[1440px] mx-auto flex flex-col px-4 pb-4 gap-[24px] bg-bg-light">
          <Link href="/" className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/#projects" className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/arjungujral/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-normal hover:opacity-70 transition-opacity duration-200"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
