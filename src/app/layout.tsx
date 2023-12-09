import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RGScroll | DOCS",
  description:
    "A simple component and hook to keep your container scrolled to the bottom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
