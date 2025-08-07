import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayantan Choudhury's Portfolio",
  description: "Portfolio of Sayantan Choudhury, a MERN stack and DevOps engineer",
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <NavBar />
          <main className="flex-1 relative overflow-y-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-teal-900/10 pointer-events-none" />
            <div className="relative z-10 p-6 md:p-12">
              {children}
              <Footer />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
