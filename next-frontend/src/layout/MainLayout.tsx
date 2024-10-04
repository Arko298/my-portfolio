import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A page for my portfolio",
};
type MainLayoutProps = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/**bg-[url('/images/Background_img.jpg')]*/}
        <div className="flex min-h-screen">
          <NavBar />
          <main className="stack min-h-screen flex-col items-center justify-between p-12 bg-gray-400 bg-no-repeat bg-cover">
            {children}
            <Footer />
          </main>
          
        </div>
      </body>
    </html>
  );
}
