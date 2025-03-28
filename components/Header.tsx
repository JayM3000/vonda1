'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-vondas-black text-white py-2 text-sm">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-4">183 W. Kinney Street, Newark, NJ 07103</span>
            <span>973-732-4532</span>
          </div>
          <div>
            <span className="block md:inline-block md:mr-4">Wed – Fri: 09:00 AM – 7:00 PM</span>
            <span>Sat – Sun: 09:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Vondas-Kitchen-Logo-removebg-preview.png" 
              alt="VONDA'S KITCHEN" 
              width={120} 
              height={60}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-vondas-grey hover:text-vondas-red font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-vondas-grey hover:text-vondas-red font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-vondas-grey hover:text-vondas-red font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-vondas-grey hover:text-vondas-red font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a href="mailto:Vondascatering@gmail.com" className="btn btn-primary">
              Email Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-vondas-grey"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-vondas-grey hover:text-vondas-red font-medium">
                Home
              </Link>
              <Link href="/menu" className="text-vondas-grey hover:text-vondas-red font-medium">
                Menu
              </Link>
              <Link href="/about" className="text-vondas-grey hover:text-vondas-red font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-vondas-grey hover:text-vondas-red font-medium">
                Contact
              </Link>
              <a href="mailto:Vondascatering@gmail.com" className="btn btn-primary text-center">
                Email Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
