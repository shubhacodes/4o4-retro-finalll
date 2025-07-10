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
  title: "SNOW BORED - 4o4 Retro Games",
  description:
    "A retro ski game where you avoid obstacles while speeding down snowy slopes.",
};

export default function Game3Layout({ children }) {
  return (
    <div className={`${oswald.variable} ${spaceGrotesk.variable} antialiased`}>
      {children}
    </div>
  );
}
