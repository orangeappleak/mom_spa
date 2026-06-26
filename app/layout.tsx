import type { Metadata } from "next";
import SmoothScroller from "@/components/SmoothScroller";
import ScrollToTop from "@/components/ScrollToTop"
import { Google_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const google_sans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Momentum",
  description: "Your personalized habit tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${google_sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroller>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}