import type { Metadata } from "next";
import { restaurantInfo } from '@/data/restaurant-info';

export const metadata: Metadata = {
  title: `Contact ${restaurantInfo.name} | Make a Reservation`,
  description: `Contact information and reservation form for ${restaurantInfo.name}. Located in Newark, NJ.`,
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
