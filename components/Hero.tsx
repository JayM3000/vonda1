import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/v1.jpg" 
          alt="VONDA'S KITCHEN - Fine Dining Experience"
          fill
          priority
          className="object-cover brightness-[0.65]"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          VONDA&apos;S KITCHEN
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-8 drop-shadow-md">
          Experience upscale yet inviting dining in the heart of Newark, NJ
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/menu" className="btn btn-primary text-lg">
            View Our Menu
          </Link>
          <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-vondas-red text-lg">
            Reserve a Table
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
