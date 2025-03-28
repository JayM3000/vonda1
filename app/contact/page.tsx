'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { restaurantInfo } from '@/data/restaurant-info';
import GoogleMapComponent from '@/components/GoogleMap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/v9.webp" 
            alt="Contact VONDA'S KITCHEN"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl px-4 drop-shadow-md">
            Make a reservation or send us a message
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-vondas-grey mb-8">Visit Us</h2>
              
              {/* Google Map */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
                <GoogleMapComponent />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-vondas-grey mb-4">Restaurant Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vondas-red mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-vondas-grey">Address</h4>
                      <address className="not-italic">
                        <p>{restaurantInfo.address.street}</p>
                        <p>{restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}</p>
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vondas-red mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-vondas-grey">Phone</h4>
                      <p>
                        <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:text-vondas-red">
                          {restaurantInfo.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vondas-red mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-vondas-grey">Email</h4>
                      <p>
                        <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:text-vondas-red">
                          {restaurantInfo.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-vondas-grey mt-8 mb-4">Hours of Operation</h3>
                <ul className="space-y-2">
                  {restaurantInfo.hours.map((hour, index) => (
                    <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                      <span className="font-medium">{hour.days}</span>
                      <span>{hour.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Reservation Form */}
            <div>
              <h2 className="text-3xl font-bold text-vondas-grey mb-8">Make a Reservation</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-8">
                  <p className="font-medium">Thank you for your reservation request!</p>
                  <p>We will contact you shortly to confirm your reservation.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-vondas-grey font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-vondas-grey font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-vondas-grey font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-vondas-grey font-medium mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="10+">More than 10 Guests</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-vondas-grey font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-vondas-grey font-medium mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-vondas-grey font-medium mb-2">
                    Special Requests or Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vondas-red"
                    placeholder="Any special requests, dietary restrictions, or occasion details..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Submitting...' : 'Request Reservation'}
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Required fields. We'll contact you to confirm your reservation.
                  For last-minute reservations, please call us directly at {restaurantInfo.contact.phone}.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
