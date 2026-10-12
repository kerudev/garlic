import "./global.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "garlic",
  icons: {
    // eslint-disable-next-line @stylistic/quotes
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧄</text></svg>'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col items-center">
          <Navbar />
          <main className="w-1/2 flex flex-col gap-4 font-[family-name:var(--font-geist-sans)] text-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
