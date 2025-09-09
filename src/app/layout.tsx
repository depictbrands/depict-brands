import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
