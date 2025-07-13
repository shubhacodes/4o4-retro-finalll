"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSound from "@/hooks/use-sound";
import { StandardCTAButton } from "../round/cta-test";

const Navbar = () => {
  const { playClick } = useSound();
  const router = useRouter();

  return (
    <nav
      style={{
        backgroundColor: "#231F20",
        fontFamily: "var(--font-oswald)",
      }}
      className="w-full py-4 px-4 sm:px-6 lg:px-8"
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
          <StandardCTAButton
            size="medium"
            rounded={true}
            onClick={() => {
              playClick();
              router.push("/contact");
            }}
          >
            START THE DETOUR
          </StandardCTAButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
