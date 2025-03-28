import Image from 'next/image';
import Link from 'next/link';
import { restaurantInfo } from '@/data/restaurant-info';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${restaurantInfo.name} | Our Story`,
  description: `Learn about the journey of Vonda McPherson, from Corporate America to becoming a celebrated restaurateur and chef at ${restaurantInfo.name} in Newark, NJ.`,
};

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/v5.webp" 
            alt={`${restaurantInfo.name} restaurant interior`}
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {restaurantInfo.about.title}
          </h1>
          <p className="text-xl max-w-2xl px-4 drop-shadow-md">
            The story of passion, perseverance, and culinary excellence
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar with Image and Quick Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8 shadow-xl">
                  <Image 
                    src={restaurantInfo.about.image} 
                    alt="Vonda McPherson - Owner of VONDA'S KITCHEN"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-vondas-grey mb-4">Vonda McPherson</h3>
                  <p className="text-gray-700 mb-4">Owner & Executive Chef</p>
                  
                  <h4 className="font-semibold text-vondas-grey mb-2">Restaurant Info</h4>
                  <address className="not-italic text-gray-700 mb-4">
                    <p>{restaurantInfo.address.street}</p>
                    <p>{restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}</p>
                    <p className="mt-2">Phone: {restaurantInfo.contact.phone}</p>
                    <p>Email: {restaurantInfo.contact.email}</p>
                    <p>Website: {restaurantInfo.contact.website}</p>
                  </address>
                  
                  <h4 className="font-semibold text-vondas-grey mb-2">Hours of Operation</h4>
                  <ul className="text-gray-700">
                    {restaurantInfo.hours.map((hour, index) => (
                      <li key={index} className="mb-1">
                        <span className="font-medium">{hour.days}:</span> {hour.hours}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link href="/contact" className="btn btn-primary w-full text-center">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-vondas-grey mb-6">The Journey of Vonda McPherson</h2>
              
              {restaurantInfo.about.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700">
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-vondas-grey mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    At VONDA'S KITCHEN, our mission is to provide an exceptional dining experience that honors traditional recipes while embracing innovation. We're committed to using quality ingredients, providing warm service, and creating a welcoming atmosphere for all our guests.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-vondas-grey mb-4">Community Involvement</h3>
                  <p className="text-gray-700">
                    We believe in giving back to the Newark community that has supported us. Through employment opportunities, sourcing local ingredients, and participating in community initiatives, we strive to make a positive impact beyond our restaurant walls.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link href="/menu" className="btn btn-primary">
                  Explore Our Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
