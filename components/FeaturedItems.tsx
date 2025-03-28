import Image from 'next/image';
import Link from 'next/link';

// Define types for the component
interface FeaturedItem {
  name: string;
  description: string;
  price: number | string;
  image: string;
}

const FeaturedItems = () => {
  const featuredItems: FeaturedItem[] = [
    {
      name: "CHICKEN & WAFFLES",
      description: "Buttermilk Belgian waffles with golden fried chicken.",
      price: 21.50,
      image: "/images/v2.jpg"
    },
    {
      name: "SHRIMP & GRITS",
      description: "(6) large shrimp, New Orleans shrimp gravy with beef sausage bits over creamy grits.",
      price: 20,
      image: "/images/v3.webp"
    },
    {
      name: "BEEF SHORT RIBS",
      description: "BBQ or Smothered Gravy. Served with two sides.",
      price: 33,
      image: "/images/v4.webp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vondas-grey mb-4">Featured Menu Items</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most beloved dishes, crafted with care and premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-60">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vondas-grey mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-vondas-red font-bold text-xl">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu" className="btn btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
