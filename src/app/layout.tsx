import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyCursor from "@/components/StickyCursor";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevRedoy",
  description: "A Portfolio Web App of Bodruddoza Redoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {/* <nav><Navbar/></nav> */}
        <StickyCursor/>
        <ScrollToTop/>
        <nav className=" px-[70px]"><Navbar/></nav>
        <main>{children}</main>
        <footer><Footer/></footer>
      </body>
    </html>
  );
}
