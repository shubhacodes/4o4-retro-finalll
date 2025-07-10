"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSound from "@/hooks/use-sound";

const Navbar = () => {
  const { playClick } = useSound();

  return (
    <nav
      style={{
        backgroundColor: "black",
        fontFamily: "var(--font-oswald)",
      }}
      className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b-3 border-white"
    >
      <div
        className="mx-auto flex justify-between items-center"
        style={{ maxWidth: "1150px" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-300"
            onClick={playClick}
          >
            <Image
              src="/logo-fin.png"
              alt="4o4 Logo"
              width={180}
              height={100}
              className="h-16 sm:h-20 lg:h-24 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-8 text-lg lg:text-xl">
          <Link
            href="/test"
            className="text-white hover:text-[#f87a30] transition-colors duration-300 font-semibold"
            style={{ letterSpacing: "1px" }}
            onClick={playClick}
          >
            TEST
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={playClick}
            style={{
              border: "3px solid white",
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: "8px",
              letterSpacing: "1px",
            }}
            className="hover:bg-[#f87a30] hover:text-white transform hover:scale-105 hover:shadow-lg active:scale-95 sm:px-6 sm:py-3 sm:text-lg"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
