import Image from 'next/image';
import Link from 'next/link';
import { restaurantInfo } from '@/data/restaurant-info';

const AboutSnippet = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={restaurantInfo.about.image} 
              alt="Vonda McPherson - Owner of VONDA'S KITCHEN"
              fill
              className="object-cover object-center"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-vondas-grey mb-6">
              {restaurantInfo.about.title}
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                {restaurantInfo.about.content[0]}
              </p>
              
              <p className="text-lg">
                {restaurantInfo.about.content[1]}
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/about" className="btn btn-outline">
                Read Vonda&apos;s Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
