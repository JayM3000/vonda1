import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import AboutSnippet from "@/components/AboutSnippet";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { restaurantInfo } from "@/data/restaurant-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${restaurantInfo.name} | Upscale Dining Experience in Newark, NJ`,
  description: `Experience upscale dining at ${restaurantInfo.name} in Newark, NJ. Enjoy our all-day breakfast menu, lunch, and dinner in an elegant yet inviting atmosphere.`,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Menu Items */}
      <FeaturedItems />
      
      {/* About Snippet */}
      <AboutSnippet />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CTA />
      
      {/* Schema.org structured data for the restaurant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: restaurantInfo.name,
            image: "/images/v1.jpg",
            "@id": `https://${restaurantInfo.contact.website}`,
            url: `https://${restaurantInfo.contact.website}`,
            telephone: restaurantInfo.contact.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: restaurantInfo.address.street,
              addressLocality: restaurantInfo.address.city,
              addressRegion: restaurantInfo.address.state,
              postalCode: restaurantInfo.address.zip,
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7369,
              longitude: -74.1723
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "09:00",
                closes: "18:00"
              }
            ],
            servesCuisine: ["American", "Soul Food", "Southern"],
            priceRange: "$$",
            menu: `https://${restaurantInfo.contact.website}/menu`,
            acceptsReservations: "Yes"
          })
        }}
      />
    </>
  );
}
