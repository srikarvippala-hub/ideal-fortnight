import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorSignal from "@/components/CursorSignal";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vippala Srikar Reddy — ECE × Engineering × Design",
  description:
    "ECE student building intelligent systems across electronics, software, AI and design.",
  openGraph: {
    title: "Vippala Srikar Reddy — ECE × Engineering × Design",
    description:
      "ECE student building intelligent systems across electronics, software, AI and design.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <CursorSignal />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
