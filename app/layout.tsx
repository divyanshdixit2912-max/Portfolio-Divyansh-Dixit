import "@/styles/globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import portfolioData from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: portfolioData.siteMetadata.title,
  description: portfolioData.siteMetadata.description,
  keywords: portfolioData.siteMetadata.keywords.join(", "),
  openGraph: {
    title: portfolioData.siteMetadata.title,
    description: portfolioData.siteMetadata.description,
    images: portfolioData.siteMetadata.ogImage ? [portfolioData.siteMetadata.ogImage] : undefined,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
