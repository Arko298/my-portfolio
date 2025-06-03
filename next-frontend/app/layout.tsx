import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <div className="flex min-h-screen bg-gray-900 text-white">
          <NavBar />
          <main className="flex-1 p-6 md:p-12 overflow-y-auto">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}