import { Oswald, Space_Grotesk } from "next/font/google";
import "../../globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "ASTEROIDS - 4o4 Retro Games",
  description:
    "Navigate your spaceship through dangerous asteroid fields in this classic arcade experience.",
};

export default function Game2Layout({ children }) {
  return (
    <div className={`${oswald.variable} ${spaceGrotesk.variable} antialiased`}>
      {children}
    </div>
  );
}
