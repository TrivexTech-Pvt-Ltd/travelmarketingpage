import type { Metadata } from "next";
import { Playfair_Display, Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PlayfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelNation - Your Gateway to the Maldives & Sri Lanka!",
  description: "Discover unforgettable journeys with Travel Nation — specialists in luxury holidays to the Maldives and Sri Lanka. Experience pristine beaches, vibrant culture, and untamed wilderness, all blended with authentic, personalized travel experiences.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PlayfairDisplay.variable} ${openSans.variable} antialiased min-h-screen flex flex-col font-openSans`}
      >
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
