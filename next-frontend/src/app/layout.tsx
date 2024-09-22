import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A page for my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{/**bg-[url('/images/Background_img.jpg')]*/}
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gray-600 bg-no-repeat bg-cover">
          <NavBar />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
