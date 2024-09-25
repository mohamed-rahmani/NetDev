import { Footer } from "@/src/feature/layout/Footer";
import { Header } from "@/src/feature/layout/Header";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetDev",
  description: "The social network for developer",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 max-w-lg m-auto py-14 w-full">
              {children}
            </main>
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
