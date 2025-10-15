import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js + SCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <StarBackground />
          <main>{children}</main>
          <ScrollToTopButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
