import type { Metadata } from "next";
import './globals.css';
import '@theme-toggles/react/css/Classic.css';

import { Inter } from 'next/font/google';

import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reprocess UI",
  description: "Easy way to reprocess your application messages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeToggle>
          <div className="bg-zinc-100 dark:bg-zinc-900">
            {children}
          </div>
        </ThemeToggle>
      </body>
    </html>
  );
}
