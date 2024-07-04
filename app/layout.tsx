import { Footer } from "@/src/feature/layout/Footer";
import { Header } from "@/src/feature/layout/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevNet",
  description: "The social network for developer",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-14 w-full">
              {children}
            </div>
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
