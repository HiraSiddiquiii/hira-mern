import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HisabDo | Smart Business Management",
  description:
    "A modern business management dashboard inspired by HisabDo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />

        <div className="flex min-h-[calc(100vh-64px)]">
          <Sidebar />

          <main className="flex-1">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}