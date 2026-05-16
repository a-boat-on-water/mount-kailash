import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import { LanguageProvider } from "@/contexts/LanguageContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kailash Trail — Mount Kailash Pilgrimage Guide",
  description:
    "Your companion for the Mount Kailash pilgrimage. Plan your trip, navigate the trail, and discover the spiritual heritage of this sacred mountain.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full bg-background`}>
      <body className="min-h-full font-sans antialiased">
        <LanguageProvider>
          <main className="pb-24 max-w-md mx-auto">
            {children}
          </main>
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
