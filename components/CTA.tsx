import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/v7.webp" 
          alt="Delicious food at VONDA'S KITCHEN"
          fill
          className="object-cover brightness-[0.35]"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us For a Culinary Experience
          </h2>
          
          <p className="text-lg mb-8">
            Whether you're looking for a delicious breakfast, a business lunch, or an elegant dinner, 
            VONDA'S KITCHEN is your destination for exceptional food served with warmth and style.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Make a Reservation
            </Link>
            <Link href="/menu" className="btn btn-outline border-white text-white hover:bg-white hover:text-vondas-red">
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
