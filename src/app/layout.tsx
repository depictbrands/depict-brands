import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Depict Brands - Boston Branding Agency",
  description: "Depict Brands is a Boston-based branding, web development, and digital marketing agency helping startups and small businesses grow through intelligent, effective visual communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans font-inter">{children}</body>
    </html>
  );
}
