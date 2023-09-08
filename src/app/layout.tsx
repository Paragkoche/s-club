import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Icon from "@/static/icons/club-logo.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Roboto({
  weight: "400",
  subsets: ["cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Student Club",
  description: "Student club JDCOEM",
  icons: {
    icon: Icon.src,
    // apple: "https://example.com/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
