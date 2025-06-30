import type { Metadata } from "next";
import { Montserrat, Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/nav/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drink It",
  description: "How about a cold mojito?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${monaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
