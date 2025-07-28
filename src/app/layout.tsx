import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
  description:
    "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
  keywords: [
    "IELTS Course",
    "IELTS Course in BD",
    "IELTS Preparation",
    "IELTS Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
