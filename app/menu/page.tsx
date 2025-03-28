'use client';

import { useState } from 'react';
import Image from 'next/image';
import { menuData } from '@/data/menu-items';
import MenuSection from '@/components/MenuSection';

export default function Menu() {
  const [activeSection, setActiveSection] = useState(0);

  // Function to scroll to a specific category
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -120; // Adjust based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/v6.webp" 
            alt="VONDA'S KITCHEN Menu"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Menu
          </h1>
          <p className="text-xl max-w-2xl px-4 drop-shadow-md">
            Delicious, homemade food prepared with love and care
          </p>
        </div>
      </div>

      {/* Menu Navigation - Primary (Breakfast/Lunch & Dinner) */}
      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="container py-4">
          <nav className="flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 md:space-x-12 mx-auto">
              {menuData.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`px-6 py-2 text-lg font-bold whitespace-nowrap transition-colors rounded-full
                    ${activeSection === index 
                      ? 'bg-vondas-red text-white' 
                      : 'bg-gray-100 text-vondas-grey hover:bg-gray-200'
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Secondary Navigation - Categories */}
      <div className="bg-gray-50 py-6 border-b border-gray-200 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 pb-2 max-w-4xl mx-auto">
            {menuData[activeSection].categories
              .filter(cat => cat.title !== "DRINKS") // Exclude DRINKS from this navigation
              .map((category, idx) => (
                <button 
                  key={idx}
                  onClick={() => scrollToCategory(`category-${activeSection}-${idx}`)}
                  className="px-6 py-3 text-base font-semibold whitespace-nowrap rounded-md bg-white shadow-sm text-vondas-grey border-b-2 border-transparent hover:border-vondas-red hover:text-vondas-red transition-all duration-200 transform hover:-translate-y-1"
                >
                  {category.title}
                </button>
              ))
            }
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-16 bg-white">
        <div className="container">
          {menuData.map((section, index) => (
            <MenuSection 
              key={index}
              section={section}
              isActive={activeSection === index}
              id={`menu-section-${index}`}
            />
          ))}
        </div>
      </section>

      {/* Menu Note */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-vondas-grey mb-4">A Note About Our Menu</h3>
            <p className="text-gray-600">
              All of our dishes are made fresh to order. Prices and availability may be subject to change. 
              Please inform your server of any allergies or dietary restrictions. 
              We are happy to accommodate special requests whenever possible.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <span className="inline-block mr-2 text-xs bg-vondas-grey text-white px-2 py-1 rounded-full">Vegetarian</span>
                <span className="text-gray-600">Meat-free dishes</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block mr-2 text-xs bg-vondas-grey text-white px-2 py-1 rounded-full">Healthy</span>
                <span className="text-gray-600">Health-conscious options</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
