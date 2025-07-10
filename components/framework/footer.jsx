import React from "react";
import Link from "next/link";
import Image from "next/image";

// Social icon component with updated styling
const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-white rounded-lg flex items-center justify-center text-black hover:bg-[#f87a30] hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
    aria-label={label}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        fontFamily: "var(--font-oswald)",
      }}
      className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t-3 border-white"
    >
      <div className="mx-auto" style={{ maxWidth: "1150px" }}>
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/logo-fin.png"
                  alt="4o4 Logo"
                  width={120}
                  height={60}
                  className="h-12 sm:h-14 w-auto"
                />
              </Link>
            </div>
            <div className="text-sm sm:text-base text-white font-medium">
              &copy; {new Date().getFullYear()} 4o4. All Rights Reserved.
            </div>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <SocialIcon href="https://twitter.com" label="Twitter">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.155 0 2.748-.012 3.088-.06 4.155-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.155.06-2.748 0-3.088-.012-4.155-.06-.94-.042-1.675-.2-2.327-.448a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 15.407 2 15.067 2 12.315c0-2.748.012-3.088.06-4.155.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.933 2.013 9.273 2 12 2h.315zM12 4.869c-3.259 0-5.895 2.636-5.895 5.895s2.636 5.895 5.895 5.895 5.895-2.636 5.895-5.895-2.636-5.895-5.895-5.895zm0 9.776c-2.126 0-3.84-1.714-3.84-3.84s1.714-3.84 3.84-3.84 3.84 1.714 3.84 3.84-1.714 3.84-3.84 3.84zm6.406-7.185a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://github.com" label="GitHub">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-white">
          <div className="text-center">
            <p className="text-sm sm:text-base text-white font-medium">
              Made with <span className="text-[#f87a30]">●</span> by the 4o4
              team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
