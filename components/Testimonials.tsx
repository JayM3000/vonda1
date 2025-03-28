import React from 'react';

interface Testimonial {
  name: string;
  title?: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Denise M.",
      title: "Newark Resident",
      content: "VONDA&apos;S KITCHEN feels like home, but with food that&apos;s at another level. The Chicken & Waffles are simply unmatched in Newark. Vonda and her team always make you feel like family.",
      rating: 5
    },
    {
      name: "Marcus J.",
      title: "Food Blogger",
      content: "I&apos;ve tried soul food across the country, and VONDA&apos;S KITCHEN stands among the best. The Shrimp & Grits has a depth of flavor that tells you it&apos;s made with care and tradition.",
      rating: 5
    },
    {
      name: "Sarah T.",
      content: "First time visitor but definitely not my last! The Tilapia was perfectly seasoned, and the sides were incredible. The atmosphere is upscale but still comfortable.",
      rating: 4
    },
    {
      name: "Robert C.",
      title: "Business Traveler",
      content: "Found this gem while on a work trip. The Beef Short Ribs melted in my mouth, and the staff&apos;s recommendations were spot on. Will be back every time I&apos;m in Newark.",
      rating: 5
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-vondas-grey text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued guests have to say about their dining experience at VONDA&apos;S KITCHEN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-lg italic mb-4">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="font-medium">
                <span className="block text-vondas-red">{testimonial.name}</span>
                {testimonial.title && (
                  <span className="text-sm text-gray-300">{testimonial.title}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
