import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "General Academic Journal",
  description: "A peer-reviewed, open access academic journal publishing cutting-edge research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-[#fdfdfc]">
        <div className="bg-[#003366] text-white text-xs py-1 px-4 text-center tracking-wide">
          ISSN: 2456-7890 (Online) | Published Bi-annually | Peer-Reviewed Open Access
        </div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
