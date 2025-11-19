
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import Cursor from "./components/Cursor";
import { SmoothScroll } from "./components/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakim - Portfolio",
  description: "Développeur ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <SmoothScroll>
          <Header />
          {/* <Cursor /> */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}