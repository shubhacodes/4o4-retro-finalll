import { Inter, Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/framework/navbar";
import Footer from "@/components/framework/footer";
import ClientWrapper from "@/components/ClientWrapper";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "4o4 Found Us - Creative Agency",
  description: "Making brands that make people do double-takes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} ${spaceGrotesk.variable}`}
      >
        <SmoothCursor />
        <Navbar />
        <ClientWrapper>
          <main>{children}</main>
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
