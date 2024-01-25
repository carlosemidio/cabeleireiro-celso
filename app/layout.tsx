import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar";
import BottomAppBar from "../components/bottomAppBar";

const inter = Inter({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabeleireiro Celso - Cortes Masculinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={libreBaskerville.className}>
        <Navbar></Navbar>
        <div className="container mx-auto lg:px-32">{children}</div>
        <BottomAppBar></BottomAppBar>
      </body>
    </html>
  );
}
