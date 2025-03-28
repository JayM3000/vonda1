import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { restaurantInfo } from "@/data/restaurant-info";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${restaurantInfo.name} | Upscale Dining Experience in Newark, NJ`,
  description: `Experience upscale dining at ${restaurantInfo.name} in Newark, NJ. Enjoy our all-day breakfast menu, lunch, and dinner in an elegant yet inviting atmosphere.`,
  keywords: [restaurantInfo.name, "Newark restaurant", "all-day breakfast", "upscale dining", "Newark NJ"],
  openGraph: {
    title: `${restaurantInfo.name} | Upscale Dining Experience in Newark, NJ`,
    description: `Experience upscale dining at ${restaurantInfo.name} in Newark, NJ. Enjoy our all-day breakfast menu, lunch, and dinner in an elegant yet inviting atmosphere.`,
    url: `https://${restaurantInfo.contact.website}`,
    siteName: restaurantInfo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/v1.jpg',
        width: 1200,
        height: 630,
        alt: `${restaurantInfo.name} featured dish`,
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-vondas-black flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
