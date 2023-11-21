import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/ui/Header";
import { Footer } from "@/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Goods",
  description: "Crafted with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {/* <main className="flex flex-col items-center justify-start w-full max-w-screen-xl mx-auto">
        <div className="px-2 sm:px-4 md:px-8"> */}
        {children}
        {/* </div>
        <Footer />
        </main> */}
      </body>
    </html>
  );
}
